#!/bin/bash

# 이미지 분석 시스템 AKS 배포 스크립트

echo "🚀 이미지 분석 시스템 배포를 시작합니다..."

# 현재 디렉토리 확인
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
echo "📁 배포 디렉토리: $SCRIPT_DIR"

# Workload Identity Client ID 확인
if [ -z "$WORKLOAD_IDENTITY_CLIENT_ID" ]; then
    echo "❌ WORKLOAD_IDENTITY_CLIENT_ID 환경 변수가 설정되지 않았습니다."
    echo "다음 명령어로 설정하세요:"
    echo "export WORKLOAD_IDENTITY_CLIENT_ID=your-client-id"
    exit 1
fi

echo "🔑 Workload Identity Client ID: $WORKLOAD_IDENTITY_CLIENT_ID"

# Azure 설정에 Client ID 적용
echo "📝 Azure 설정 업데이트 중..."
sed -i.bak "s/YOUR_WORKLOAD_IDENTITY_CLIENT_ID/$WORKLOAD_IDENTITY_CLIENT_ID/g" "$SCRIPT_DIR/azure-config.yaml"

# 순차적으로 배포
echo "1️⃣ Azure 설정 배포 중..."
kubectl apply -f "$SCRIPT_DIR/azure-config.yaml"

echo "2️⃣ Kafka 배포 중..."
kubectl apply -f "$SCRIPT_DIR/kafka.yaml"

echo "3️⃣ FastAPI 배포 중..."
kubectl apply -f "$SCRIPT_DIR/fastapi.yaml"

echo "4️⃣ AI 서비스 배포 중..."
kubectl apply -f "$SCRIPT_DIR/deployment.yaml"
kubectl apply -f "$SCRIPT_DIR/service.yaml"

echo "5️⃣ Ingress 배포 중..."
kubectl apply -f "$SCRIPT_DIR/ingress.yaml"

# 배포 상태 확인
echo "📊 배포 상태 확인 중..."
sleep 5

echo "🔍 Pod 상태:"
kubectl get pods -l app=ai
kubectl get pods -l app=fastapi
kubectl get pods -l app=kafka

echo "🌐 Service 상태:"
kubectl get services ai fastapi kafka

echo "🚪 Ingress 상태:"
kubectl get ingress image-analysis-ingress

echo "✅ 배포가 완료되었습니다!"
echo ""
echo "📖 다음 명령어로 로그를 확인할 수 있습니다:"
echo "kubectl logs -f deployment/ai"
echo "kubectl logs -f deployment/fastapi"
echo "kubectl logs -f deployment/kafka"
echo ""
echo "🌐 서비스 테스트:"
echo "kubectl port-forward service/ai 8080:8080"
echo "curl http://localhost:8080/actuator/health"