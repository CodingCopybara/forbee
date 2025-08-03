# 이미지 분석 시스템 Kubernetes 배포

이 디렉토리는 AI 기반 이미지 분석 시스템의 Kubernetes 배포 설정을 포함합니다.

## 📁 파일 구조

```
ai/kubernetes/
├── azure-config.yaml    # Azure Blob Storage 설정 + ServiceAccount
├── deployment.yaml      # AI 서비스 Deployment
├── service.yaml         # AI 서비스 Service
├── fastapi.yaml         # FastAPI (Python 추론) Deployment + Service
├── kafka.yaml           # Kafka Deployment + Service
├── ingress.yaml         # Ingress (외부 접근)
├── deploy.sh            # 자동 배포 스크립트
└── README.md            # 이 파일
```

## 🚀 빠른 배포

### 1. 사전 준비
```bash
# AKS 클러스터 연결
az aks get-credentials --resource-group rg-image-analysis --name aks-image-analysis

# Workload Identity Client ID 설정
export WORKLOAD_IDENTITY_CLIENT_ID="your-actual-client-id"
```

### 2. 한 번에 배포
```bash
cd ai/kubernetes
./deploy.sh
```

### 3. 개별 배포 (필요시)
```bash
# 순서대로 배포
kubectl apply -f azure-config.yaml
kubectl apply -f kafka.yaml
kubectl apply -f fastapi.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```

## 🔍 상태 확인

### Pod 상태 확인
```bash
kubectl get pods
kubectl get pods -l app=ai
kubectl get pods -l app=fastapi
kubectl get pods -l app=kafka
```

### 로그 확인
```bash
kubectl logs -f deployment/ai
kubectl logs -f deployment/fastapi
kubectl logs -f deployment/kafka
```

### 서비스 테스트
```bash
# AI 서비스 헬스체크
kubectl port-forward service/ai 8080:8080
curl http://localhost:8080/actuator/health

# FastAPI 헬스체크
kubectl port-forward service/fastapi 8000:8000
curl http://localhost:8000/health
```

## ⚙️ 설정 변경

### Azure Storage Account 변경
`azure-config.yaml` 파일에서 수정:
```yaml
data:
  storage-account-url: "https://YOUR_STORAGE_ACCOUNT.blob.core.windows.net"
  container-name: "images"
```

### Docker 이미지 변경
`deployment.yaml`과 `fastapi.yaml`에서 수정:
```yaml
image: "your-registry.azurecr.io/ai:latest"
image: "your-registry.azurecr.io/fastapi:latest"
```

### 리소스 제한 조정
`fastapi.yaml`에서 수정:
```yaml
resources:
  requests:
    memory: "512Mi"
    cpu: "250m"
  limits:
    memory: "2Gi"
    cpu: "1000m"
```

## 🔧 트러블슈팅

### 일반적인 문제들

**ImagePullBackOff:**
```bash
kubectl describe pod [pod-name]
# ACR 연결 확인 필요
```

**Workload Identity 인증 실패:**
```bash
kubectl describe serviceaccount ai-service-account
# Federated Credential 설정 확인 필요
```

**WebSocket 연결 실패:**
```bash
kubectl describe ingress image-analysis-ingress
# Ingress annotation 확인
```

### 디버깅 명령어
```bash
# 전체 리소스 확인
kubectl get all

# 특정 Pod 세부 정보
kubectl describe pod [pod-name]

# 실시간 이벤트 모니터링
kubectl get events --sort-by='.lastTimestamp' --watch
```

## 🔄 업데이트 및 롤백

### 이미지 업데이트
```bash
# 새 이미지로 업데이트
kubectl set image deployment/ai ai=your-registry.azurecr.io/ai:v2.0
kubectl set image deployment/fastapi fastapi=your-registry.azurecr.io/fastapi:v2.0

# 업데이트 상태 확인
kubectl rollout status deployment/ai
kubectl rollout status deployment/fastapi
```

### 롤백
```bash
# 이전 버전으로 롤백
kubectl rollout undo deployment/ai
kubectl rollout undo deployment/fastapi

# 롤아웃 히스토리 확인
kubectl rollout history deployment/ai
```

## 📊 모니터링

### 리소스 사용량 확인
```bash
kubectl top pods
kubectl top nodes
```

### 스케일링
```bash
# 수동 스케일링
kubectl scale deployment ai --replicas=3
kubectl scale deployment fastapi --replicas=2

# HPA (Horizontal Pod Autoscaler) 설정
kubectl autoscale deployment ai --cpu-percent=70 --min=1 --max=5
kubectl autoscale deployment fastapi --cpu-percent=80 --min=1 --max=3
```

## 🗑️ 정리

### 전체 삭제
```bash
kubectl delete -f .
```

### 개별 삭제
```bash
kubectl delete deployment ai fastapi kafka
kubectl delete service ai fastapi kafka
kubectl delete ingress image-analysis-ingress
kubectl delete configmap azure-config
kubectl delete serviceaccount ai-service-account
```