from kafka import KafkaConsumer
import json
import os
import subprocess
import socket

# 확인할 토픽 이름 - forbee 프로젝트에서 사용하는 토픽
TOPIC_NAME = 'forbee'

def get_possible_kafka_servers():
    """가능한 모든 Kafka 서버 주소를 반환합니다"""
    servers = []
    
    # 환경 변수가 설정되어 있으면 우선 사용
    env_server = os.environ.get('KAFKA_BOOTSTRAP_SERVERS')
    if env_server:
        servers.append(env_server)
    
    # WSL에서 Windows IP 찾기
    try:
        result = subprocess.run(['cat', '/etc/resolv.conf'], capture_output=True, text=True)
        for line in result.stdout.split('\n'):
            if line.startswith('nameserver'):
                windows_ip = line.split()[1]
                servers.append(f'{windows_ip}:19092')
                break
    except:
        pass
    
    # 기본 게이트웨이 확인
    try:
        result = subprocess.run(['ip', 'route', 'show', 'default'], capture_output=True, text=True)
        if result.stdout:
            gateway = result.stdout.split()[2]
            servers.append(f'{gateway}:19092')
    except:
        pass
    
    # 추가 시도할 주소들
    additional_servers = [
        'host.docker.internal:19092',  # Docker Desktop WSL 통합
        'localhost:19092',             # WSL 로컬
        '127.0.0.1:19092',            # 명시적 로컬
        'docker.for.win.localhost:19092',  # Docker Desktop 레거시
    ]
    
    # Windows hostname 시도
    try:
        hostname = socket.gethostname()
        if hostname and hostname != 'localhost':
            additional_servers.append(f'{hostname}:19092')
    except:
        pass
    
    servers.extend(additional_servers)
    
    # 중복 제거하면서 순서 유지
    seen = set()
    unique_servers = []
    for server in servers:
        if server not in seen:
            seen.add(server)
            unique_servers.append(server)
    
    return unique_servers

def test_kafka_connection(server_address):
    """특정 서버 주소로 Kafka 연결을 테스트합니다"""
    try:
        print(f"🔍 {server_address} 연결 시도 중...")
        consumer = KafkaConsumer(
            TOPIC_NAME,
            bootstrap_servers=[server_address],
            auto_offset_reset='earliest',
            value_deserializer=lambda x: json.loads(x.decode('utf-8')),
            api_version=(0, 10, 1),
            consumer_timeout_ms=3000  # 3초 타임아웃
        )
        
        # 연결 테스트를 위해 메타데이터 요청
        partitions = consumer.partitions_for_topic(TOPIC_NAME)
        
        print(f"✅ {server_address} 연결 성공!")
        if partitions:
            print(f"📊 토픽 '{TOPIC_NAME}' 파티션: {partitions}")
        else:
            print(f"📋 토픽 '{TOPIC_NAME}' 준비됨 (파티션 자동 생성 예정)")
        
        return consumer
        
    except Exception as e:
        print(f"❌ {server_address} 연결 실패: {e}")
        return None

def main():
    print("🚀 Kafka 연결 진단 및 Consumer 시작")
    print("=" * 60)
    
    servers = get_possible_kafka_servers()
    
    print(f"📡 테스트할 서버 주소들:")
    for i, server in enumerate(servers, 1):
        print(f"  {i}. {server}")
    print("-" * 60)
    
    # 각 서버를 순차적으로 시도
    working_consumer = None
    working_server = None
    
    for server in servers:
        consumer = test_kafka_connection(server)
        if consumer:
            working_consumer = consumer
            working_server = server
            break
    
    if working_consumer:
        print(f"\n🎉 성공! {working_server}로 연결됨")
        print(f"💡 앞으로 사용할 환경 변수:")
        print(f"   export KAFKA_BOOTSTRAP_SERVERS={working_server}")
        print(f"\n📥 '{TOPIC_NAME}' 토픽의 메시지를 기다리는 중...")
        print("🛑 Ctrl+C로 종료")
        
        try:
            # 실시간 메시지 수신
            for message in working_consumer:
                print("\n--- 새로운 메시지 수신 ---")
                print(f"서버: {working_server}")
                print(f"토픽: {message.topic}, 파티션: {message.partition}, 오프셋: {message.offset}")
                print("메시지 내용:")
                print(json.dumps(message.value, indent=4, ensure_ascii=False))
                
        except KeyboardInterrupt:
            print("\n🛑 사용자에 의해 중단됨")
        finally:
            working_consumer.close()
            print("👋 Consumer 연결 종료")
    else:
        print("\n💥 모든 서버 연결에 실패했습니다!")
        print("\n🔧 문제 해결 방법:")
        print("1. Kafka가 실제로 실행 중인지 확인:")
        print("   docker ps | grep kafka")
        print("\n2. Windows PowerShell/CMD에서 실행 (WSL 아님):")
        print("   docker-compose -f ai/src/main/python/docker-compose.yml up -d")
        print("\n3. 포트 19092가 열려있는지 확인:")
        print("   netstat -tulpn | grep 19092")
        print("\n4. 방화벽 설정 확인")

if __name__ == "__main__":
    main()