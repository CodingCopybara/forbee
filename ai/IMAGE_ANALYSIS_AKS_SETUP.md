# 이미지 분석 전용 AKS 설정 가이드

이 문서는 **AI 서비스와 FastAPI를 중심으로 한 이미지 분석 기능**만을 AKS에서 실행하는 최소한의 설정을 다룹니다.

## 🎯 **이미지 분석 전용 아키텍처**

```
[Frontend Pod] --①SAS요청--> [AI Service Pod] --②Workload ID--> [Azure Blob]
      |                           |                                    |
      +--③직접 PUT 업로드----------+                                    |
      |                           |                                    |
      +--④분석요청--> [AI Service] --⑤HTTP--> [FastAPI Pod] --⑥GET--> [Azure Blob]
      |                     |                        |
      +--⑨WebSocket<--------+--⑧Kafka Event<--------+--⑦결과 저장--> [Azure Blob]
```

## 📦 **포함된 서비스들**

- **AI Service**: SAS 토큰 발급, 분석 요청 처리, WebSocket 결과 전달
- **FastAPI**: Python 기반 이미지 추론 서비스
- **Kafka**: 이벤트 스트리밍 (분석 결과 전달)
- **Frontend**: 이미지 분석 UI (Vue.js)

## 1. 🔧 **AKS 클러스터 생성 (최소 구성)**

```bash
# 리소스 그룹 생성
az group create --name rg-image-analysis --location "Korea Central"

# 작은 규모의 AKS 클러스터 생성 (이미지 분석 전용)
az aks create \
    --resource-group rg-image-analysis \
    --name aks-image-analysis \
    --node-count 2 \
    --node-vm-size Standard_D2s_v3 \
    --enable-managed-identity \
    --enable-workload-identity \
    --enable-oidc-issuer \
    --generate-ssh-keys

# kubectl 설정
az aks get-credentials --resource-group rg-image-analysis --name aks-image-analysis
```

## 2. 🔐 **Azure Storage Account 설정**

```bash
# Storage Account 생성
az storage account create \
    --name imageanalysisstorage \
    --resource-group rg-image-analysis \
    --location "Korea Central" \
    --sku Standard_LRS \
    --kind StorageV2

# Blob Container 생성
az storage container create \
    --name images \
    --account-name imageanalysisstorage \
    --auth-mode login

# CORS 설정
az storage cors add \
    --methods GET PUT OPTIONS \
    --origins "*" \
    --allowed-headers "*" \
    --exposed-headers "*" \
    --max-age 3600 \
    --services b \
    --account-name imageanalysisstorage
```

## 3. 🔑 **Workload Identity 설정**

```bash
# Managed Identity 생성
az identity create \
    --name image-analysis-identity \
    --resource-group rg-image-analysis

# Client ID 가져오기
export USER_ASSIGNED_CLIENT_ID=$(az identity show \
    --resource-group rg-image-analysis \
    --name image-analysis-identity \
    --query 'clientId' \
    -o tsv)

export USER_ASSIGNED_OBJECT_ID=$(az identity show \
    --resource-group rg-image-analysis \
    --name image-analysis-identity \
    --query 'principalId' \
    -o tsv)

# Storage 권한 부여
az role assignment create \
    --assignee $USER_ASSIGNED_OBJECT_ID \
    --role "Storage Blob Data Contributor" \
    --scope "/subscriptions/$(az account show --query id -o tsv)/resourceGroups/rg-image-analysis/providers/Microsoft.Storage/storageAccounts/imageanalysisstorage"

# AKS OIDC Issuer URL 가져오기
export AKS_OIDC_ISSUER=$(az aks show \
    --name aks-image-analysis \
    --resource-group rg-image-analysis \
    --query "oidcIssuerProfile.issuerUrl" \
    -o tsv)

# Federated Credential 생성
az identity federated-credential create \
    --name image-analysis-federated-credential \
    --identity-name image-analysis-identity \
    --resource-group rg-image-analysis \
    --issuer $AKS_OIDC_ISSUER \
    --subject system:serviceaccount:default:ai-service-account

echo "Client ID: $USER_ASSIGNED_CLIENT_ID"
echo "Storage Account: imageanalysisstorage"
```

## 4. 📝 **배포 파일 수정**

```bash
# Client ID를 실제 값으로 변경
sed -i "s/YOUR_WORKLOAD_IDENTITY_CLIENT_ID/$USER_ASSIGNED_CLIENT_ID/g" kubernetes/image-analysis-only.yml

# Storage Account 이름 변경 (필요시)
sed -i "s/forbeeimagestorage/imageanalysisstorage/g" kubernetes/image-analysis-only.yml
```

## 5. 🐳 **Docker 이미지 준비**

### 5.1 ACR 생성 (선택사항)
```bash
# Azure Container Registry 생성
az acr create \
    --resource-group rg-image-analysis \
    --name imageanalysisacr \
    --sku Basic

# AKS에서 ACR 접근 권한 설정
az aks update \
    --name aks-image-analysis \
    --resource-group rg-image-analysis \
    --attach-acr imageanalysisacr
```

### 5.2 이미지 빌드 및 푸시
```bash
# ACR 로그인
az acr login --name imageanalysisacr

# AI Service 이미지 빌드
cd ai
docker build -t imageanalysisacr.azurecr.io/ai:latest .
docker push imageanalysisacr.azurecr.io/ai:latest

# FastAPI 이미지 빌드
docker build -f src/main/python/Dockerfile -t imageanalysisacr.azurecr.io/fastapi:latest src/main/python/
docker push imageanalysisacr.azurecr.io/fastapi:latest

# Frontend 이미지 빌드
cd ../frontend
docker build -t imageanalysisacr.azurecr.io/frontend:latest .
docker push imageanalysisacr.azurecr.io/frontend:latest

# 배포 파일에서 이미지 이름 변경
cd ../
sed -i "s/username/imageanalysisacr.azurecr.io/g" kubernetes/image-analysis-only.yml
```

## 6. 🚀 **애플리케이션 배포**

```bash
# 이미지 분석 전용 배포
kubectl apply -f kubernetes/image-analysis-only.yml

# 배포 상태 확인
kubectl get pods
kubectl get services
kubectl get ingress
```

## 7. 🔍 **배포 검증**

### 7.1 Pod 상태 확인
```bash
# 모든 Pod가 Running 상태인지 확인
kubectl get pods -l app=ai
kubectl get pods -l app=fastapi
kubectl get pods -l app=kafka
kubectl get pods -l app=frontend

# 상세 로그 확인
kubectl logs -f deployment/ai
kubectl logs -f deployment/fastapi
```

### 7.2 서비스 테스트
```bash
# AI 서비스 헬스체크
kubectl port-forward service/ai 8080:8080 &
curl http://localhost:8080/actuator/health

# FastAPI 헬스체크
kubectl port-forward service/fastapi 8000:8000 &
curl http://localhost:8000/health

# Frontend 접근
kubectl port-forward service/frontend 3000:80 &
# 브라우저에서 http://localhost:3000 접근
```

### 7.3 WebSocket 연결 테스트
```bash
# WebSocket 연결 확인
kubectl port-forward service/ai 8080:8080 &

# 브라우저 개발자 도구에서 실행:
# const socket = new SockJS('http://localhost:8080/ws');
# console.log('WebSocket 연결 테스트');
```

## 8. 🌐 **Ingress 설정 (외부 접근)**

### 8.1 NGINX Ingress Controller 설치
```bash
# NGINX Ingress Controller 설치
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml

# LoadBalancer IP 확인
kubectl get service -n ingress-nginx ingress-nginx-controller
```

### 8.2 DNS 설정
```bash
# LoadBalancer IP 확인
export INGRESS_IP=$(kubectl get service -n ingress-nginx ingress-nginx-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}')

echo "Ingress IP: $INGRESS_IP"

# DNS A 레코드 설정
# image-analysis.yourdomain.com -> $INGRESS_IP
```

## 9. 🧪 **전체 플로우 테스트**

### 9.1 테스트 시나리오
1. **Frontend 접근**: `http://image-analysis.yourdomain.com`
2. **이미지 분석 버튼 클릭**: 팝업 열림
3. **이미지 파일 선택**: 로컬 이미지 선택
4. **Azure Blob 업로드**: SAS 토큰으로 직접 업로드
5. **분석 요청**: AI 서비스로 분석 요청
6. **FastAPI 추론**: Python 모델로 이미지 분석
7. **결과 저장**: 분석 결과 이미지를 Azure Blob에 저장
8. **Kafka 이벤트**: 분석 완료 이벤트 발행
9. **WebSocket 알림**: 실시간으로 Frontend에 결과 전달

### 9.2 테스트 명령어
```bash
# 1. 전체 Pod 상태 확인
kubectl get pods

# 2. 서비스 연결 확인
kubectl get services

# 3. 실시간 로그 모니터링
kubectl logs -f deployment/ai --tail=50
kubectl logs -f deployment/fastapi --tail=50

# 4. 이벤트 확인
kubectl get events --sort-by='.lastTimestamp'
```

## 10. 🔧 **트러블슈팅**

### 10.1 일반적인 문제들

**Pod ImagePullBackOff:**
```bash
# ACR 연결 확인
kubectl describe pod [pod-name]
az aks check-acr --name aks-image-analysis --resource-group rg-image-analysis --acr imageanalysisacr.azurecr.io
```

**Workload Identity 인증 실패:**
```bash
# ServiceAccount 확인
kubectl describe serviceaccount ai-service-account

# Identity 확인
az identity show --name image-analysis-identity --resource-group rg-image-analysis
```

**WebSocket 연결 실패:**
```bash
# Ingress 설정 확인
kubectl describe ingress image-analysis-ingress

# AI Service WebSocket 로그
kubectl logs deployment/ai | grep -i websocket
```

## 11. 📊 **리소스 사용량**

### 11.1 최소 리소스 요구사항
- **AI Service**: 512Mi RAM, 500m CPU
- **FastAPI**: 1Gi RAM, 500m CPU (GPU 추천)
- **Kafka**: 1Gi RAM, 500m CPU
- **Frontend**: 128Mi RAM, 100m CPU

### 11.2 클러스터 스케일링
```bash
# 노드 개수 조정
az aks scale \
    --resource-group rg-image-analysis \
    --name aks-image-analysis \
    --node-count 3

# HPA (Horizontal Pod Autoscaler) 설정
kubectl autoscale deployment ai --cpu-percent=70 --min=1 --max=3
kubectl autoscale deployment fastapi --cpu-percent=80 --min=1 --max=2
```

## 12. 📋 **배포 체크리스트 (이미지 분석 전용)**

- [ ] AKS 클러스터 생성 (Workload Identity 활성화)
- [ ] Azure Storage Account 생성 및 CORS 설정
- [ ] Managed Identity 생성 및 Storage 권한 부여
- [ ] Federated Credential 설정
- [ ] ACR 생성 및 이미지 푸시
- [ ] `image-analysis-only.yml` 배포
- [ ] Pod 상태 확인 (ai, fastapi, kafka, frontend)
- [ ] WebSocket 연결 테스트
- [ ] 이미지 업로드 → 분석 → 결과 표시 플로우 테스트

이 설정으로 **이미지 분석 기능만을 위한 경량화된 AKS 환경**이 구축됩니다! 🎯

## 13. 💰 **비용 최적화 팁**

```bash
# 개발 중에는 클러스터 중지
az aks stop --name aks-image-analysis --resource-group rg-image-analysis

# 사용 재개
az aks start --name aks-image-analysis --resource-group rg-image-analysis

# Spot 인스턴스 사용 (70% 비용 절감)
az aks nodepool add \
    --resource-group rg-image-analysis \
    --cluster-name aks-image-analysis \
    --name spotpool \
    --priority Spot \
    --eviction-policy Delete \
    --spot-max-price -1 \
    --node-count 1 \
    --node-vm-size Standard_D2s_v3
```