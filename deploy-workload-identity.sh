#!/bin/bash

# Workload Identity 배포 스크립트

set -e

# 환경 변수 설정
CLUSTER_NAME="your-aks-cluster"
RESOURCE_GROUP="your-resource-group"
STORAGE_ACCOUNT="your-storage-account"
CONTAINER_NAME="your-container"

echo "🚀 Workload Identity 설정 시작..."

# 1. AKS 클러스터에 Workload Identity 활성화
echo "📋 AKS 클러스터에 Workload Identity 활성화..."
az aks update \
  --name $CLUSTER_NAME \
  --resource-group $RESOURCE_GROUP \
  --enable-oidc-issuer \
  --enable-workload-identity

# 2. Azure AD 애플리케이션 생성
echo "📋 Azure AD 애플리케이션 생성..."
az ad app create --display-name "forbee-ai-workload-identity"

# 클라이언트 ID 저장
export APPLICATION_CLIENT_ID=$(az ad app list --display-name "forbee-ai-workload-identity" --query "[0].appId" -o tsv)
echo "✅ 애플리케이션 클라이언트 ID: $APPLICATION_CLIENT_ID"

# 3. 서비스 주체 생성
echo "📋 서비스 주체 생성..."
az ad sp create --id $APPLICATION_CLIENT_ID

# 4. Storage Account에 권한 부여
echo "📋 Storage Account에 권한 부여..."
SUBSCRIPTION_ID=$(az account show --query id -o tsv)
az role assignment create \
  --assignee $APPLICATION_CLIENT_ID \
  --role "Storage Blob Data Contributor" \
  --scope "/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Storage/storageAccounts/$STORAGE_ACCOUNT"

# 5. OIDC Issuer URL 가져오기
echo "📋 OIDC Issuer URL 가져오기..."
export OIDC_ISSUER=$(az aks show --name $CLUSTER_NAME --resource-group $RESOURCE_GROUP --query "oidcIssuerProfile.issuerUrl" -o tsv)
echo "✅ OIDC Issuer: $OIDC_ISSUER"

# 6. Federated Identity Credential 생성
echo "📋 Federated Identity Credential 생성..."
az ad app federated-credential create \
  --id $APPLICATION_CLIENT_ID \
  --parameters "{\"name\":\"forbee-ai-federated-credential\",\"issuer\":\"$OIDC_ISSUER\",\"subject\":\"system:serviceaccount:default:ai-service-account\",\"audience\":[\"api://AzureADTokenExchange\"]}"

# 7. Kubernetes 리소스 배포
echo "📋 Kubernetes 리소스 배포..."
kubectl apply -f kubernetes/workload-identity.yaml
kubectl apply -f kubernetes/ai-deployment-workload-identity.yaml

echo "✅ Workload Identity 설정 완료!"
echo "🔍 배포 상태 확인: kubectl get pods"
