# Azure Blob Storage 이미지 분석 설정 가이드

이 문서는 Azure Blob Storage와 Managed Identity를 사용한 이미지 분석 시스템의 설정 방법을 설명합니다.

## 아키텍처 개요

```
[브라우저] --SAS토큰요청--> [Spring Boot AI 서비스] --Managed ID--> [Azure Blob Storage]
     |                                                                    |
     +--직접 PUT 업로드---------------------------------------------+
     |
     +--분석요청--> [Spring Boot] --HTTP--> [Python FastAPI] --GET--> [Azure Blob]
                        |                          |
                        +--Kafka--> [결과 알림]     +--결과 이미지 저장--> [Azure Blob]
```

## 1. Azure 리소스 생성

### 1.1 Storage Account 생성
```bash
# 리소스 그룹 생성
az group create --name rg-forbee --location "Korea Central"

# Storage Account 생성
az storage account create \
    --name forbeeimagestorage \
    --resource-group rg-forbee \
    --location "Korea Central" \
    --sku Standard_LRS \
    --kind StorageV2 \
    --access-tier Hot
```

### 1.2 Blob Container 생성
```bash
# 컨테이너 생성 (Private 액세스)
az storage container create \
    --name images \
    --account-name forbeeimagestorage \
    --auth-mode login
```

### 1.3 CORS 설정
```bash
# Azure Portal에서 설정하거나 CLI로 설정
az storage cors add \
    --methods GET PUT OPTIONS \
    --origins "http://localhost:3000" "https://your-frontend-domain.com" \
    --allowed-headers "*" \
    --exposed-headers "*" \
    --max-age 3600 \
    --services b \
    --account-name forbeeimagestorage
```

## 2. Managed Identity 설정

### 2.1 System-assigned Managed Identity 활성화

**Azure Container Apps의 경우:**
```bash
az containerapp identity assign \
    --name ai-service \
    --resource-group rg-forbee \
    --system-assigned
```

**Azure App Service의 경우:**
```bash
az webapp identity assign \
    --name ai-service \
    --resource-group rg-forbee
```

**Azure VM의 경우:**
```bash
az vm identity assign \
    --name ai-vm \
    --resource-group rg-forbee
```

### 2.2 Storage Account 권한 부여
```bash
# Managed Identity의 Object ID 확인
PRINCIPAL_ID=$(az containerapp identity show \
    --name ai-service \
    --resource-group rg-forbee \
    --query principalId -o tsv)

# Storage Blob Data Contributor 권한 부여
az role assignment create \
    --assignee $PRINCIPAL_ID \
    --role "Storage Blob Data Contributor" \
    --scope "/subscriptions/YOUR_SUBSCRIPTION_ID/resourceGroups/rg-forbee/providers/Microsoft.Storage/storageAccounts/forbeeimagestorage"
```

## 3. 환경 변수 설정

### 3.1 Spring Boot 애플리케이션 환경 변수
```bash
# .env 파일 또는 시스템 환경 변수로 설정
export AZURE_STORAGE_ACCOUNT_URL="https://forbeeimagestorage.blob.core.windows.net"
export AZURE_STORAGE_CONTAINER_NAME="images"

# Managed Identity 사용시 (기본값)
export AZURE_CLIENT_ID=""  # System-assigned의 경우 비워둠
```

### 3.2 Python FastAPI 환경 변수
```bash
# Python 서비스에서도 같은 설정 사용
export USE_AZURE_STORAGE="true"
export AZURE_STORAGE_ACCOUNT_URL="https://forbeeimagestorage.blob.core.windows.net"
export AZURE_CONTAINER_NAME="images"
```

## 4. 로컬 개발 환경 설정

### 4.1 Azure CLI 로그인
```bash
# Azure CLI로 로그인 (개발 환경에서)
az login

# 특정 구독 선택
az account set --subscription "YOUR_SUBSCRIPTION_ID"
```

### 4.2 IntelliJ IDEA 또는 Visual Studio Code
- Azure Account 플러그인 설치
- Azure CLI로 로그인한 계정으로 자동 인증

### 4.3 로컬 테스트 권한
```bash
# 개발자 계정에 Storage 권한 부여
az role assignment create \
    --assignee "your-email@company.com" \
    --role "Storage Blob Data Contributor" \
    --scope "/subscriptions/YOUR_SUBSCRIPTION_ID/resourceGroups/rg-forbee/providers/Microsoft.Storage/storageAccounts/forbeeimagestorage"
```

## 5. 보안 고려사항

### 5.1 SAS 토큰 설정
- **만료 시간**: 10분 이하로 설정
- **권한**: Create, Write만 부여 (Read 권한 없음)
- **IP 제한**: 필요시 특정 IP 대역만 허용

### 5.2 Blob Container 권한
- Container를 **Private**으로 설정
- 읽기 전용 액세스가 필요한 경우 별도 SAS 생성

### 5.3 네트워크 보안
```bash
# Storage Account 방화벽 설정 (필요시)
az storage account network-rule add \
    --resource-group rg-forbee \
    --account-name forbeeimagestorage \
    --ip-address "YOUR_APP_IP"
```

## 6. 모니터링 및 로깅

### 6.1 Storage Account 메트릭 확인
- Azure Portal > Storage Account > 모니터링 > 메트릭
- 업로드/다운로드 트래픽, 요청 수, 오류율 모니터링

### 6.2 애플리케이션 로그
```yaml
# application.yml에 로깅 설정 추가
logging:
  level:
    com.azure.storage: DEBUG
    forbee.infra.AzureBlobService: DEBUG
```

## 7. 트러블슈팅

### 7.1 일반적인 오류

**403 Forbidden 오류:**
```
원인: Managed Identity 권한 부족
해결: Storage Blob Data Contributor 역할 확인
```

**CORS 오류:**
```
원인: 브라우저에서 직접 업로드시 CORS 정책 위반
해결: Storage Account CORS 설정 확인
```

**SAS 토큰 만료:**
```
원인: SAS 토큰 유효시간 초과
해결: 토큰 생성 시간과 만료 시간 확인
```

### 7.2 디버깅 명령어
```bash
# Storage Account 연결 테스트
az storage blob list \
    --container-name images \
    --account-name forbeeimagestorage \
    --auth-mode login

# Managed Identity 상태 확인
az containerapp identity show \
    --name ai-service \
    --resource-group rg-forbee
```

## 8. 운영 환경 배포 체크리스트

- [ ] Storage Account 생성 및 Container 설정
- [ ] Managed Identity 활성화
- [ ] Storage 권한 부여 (Storage Blob Data Contributor)
- [ ] CORS 정책 설정
- [ ] 환경 변수 설정
- [ ] 네트워크 보안 규칙 (필요시)
- [ ] 모니터링 및 알림 설정
- [ ] Lifecycle 정책 설정 (오래된 파일 자동 삭제)

## 9. 비용 최적화

### 9.1 Lifecycle Management 정책
```json
{
  "rules": [
    {
      "name": "deleteOldImages",
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": ["blockBlob"],
          "prefixMatch": ["images/"]
        },
        "actions": {
          "baseBlob": {
            "delete": {
              "daysAfterModificationGreaterThan": 30
            }
          }
        }
      }
    }
  ]
}
```

### 9.2 Storage Tier 설정
- 자주 액세스하지 않는 이미지는 Cool/Archive Tier로 이동
- 분석 결과 이미지는 Hot Tier 유지

이 설정을 완료하면 브라우저에서 Azure Blob Storage로 직접 이미지를 업로드하고, 
백엔드 서비스들이 Managed Identity를 사용하여 안전하게 스토리지에 액세스할 수 있습니다.