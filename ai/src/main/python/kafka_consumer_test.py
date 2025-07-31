from kafka import KafkaConsumer
import json

# 확인할 토픽 이름
TOPIC_NAME = 'analysis_results_topic'

# Kafka 서버 주소
BOOTSTRAP_SERVERS = ['localhost:9092']

# Consumer 생성
consumer = KafkaConsumer(
    TOPIC_NAME,
    bootstrap_servers=BOOTSTRAP_SERVERS,
    auto_offset_reset='earliest', # 가장 처음부터 메시지를 가져옴
    # JSON으로 된 메시지를 파이썬 딕셔너리로 자동 변환
    value_deserializer=lambda x: json.loads(x.decode('utf-8'))
)

print(f"'{TOPIC_NAME}' 토픽의 메시지를 기다리는 중...")

# 새로운 메시지가 들어올 때마다 화면에 출력
for message in consumer:
    print("\n--- 새로운 메시지 수신 ---")
    print(f"토픽: {message.topic}, 파티션: {message.partition}, 오프셋: {message.offset}")
    print("메시지 내용:")
    # 예쁘게 출력
    print(json.dumps(message.value, indent=4, ensure_ascii=False))