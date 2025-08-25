import os
import uuid
import time
import json
from typing import List
from pathlib import Path
from urllib.parse import urlparse

import cv2
import numpy as np
import requests
import torch
# import uvicorn
from dotenv import load_dotenv
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from ultralytics import YOLO
from kafka import KafkaProducer
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient, ContentSettings

load_dotenv()
script_dir = Path(__file__).parent.resolve()

USE_AZURE_STORAGE = os.environ.get("USE_AZURE_STORAGE", "False").lower() == "true"
LOCAL_OUTPUT_DIR = Path("results")
LOCAL_IMAGE_SERVER_BASE_URL = os.environ.get("LOCAL_IMAGE_SERVER_BASE_URL", "http://localhost:8001")
if USE_AZURE_STORAGE:
    account_url = os.environ["AZURE_STORAGE_ACCOUNT_URL"]
    AZURE_CONTAINER_NAME = os.environ["AZURE_CONTAINER_NAME"]
    credential = DefaultAzureCredential()
    blob_service_client = BlobServiceClient(account_url=account_url, credential=credential)
else:
    blob_service_client = None

# 환경 변수 설정
KAFKA_SERVERS = os.environ.get("KAFKA_BOOTSTRAP_SERVERS", "localhost:9092")
KAFKA_TOPIC = os.environ.get("KAFKA_TOPIC", "forbee")

# Kafka Producer 초기화
try:
    producer = KafkaProducer(
        key_serializer=str.encode,
        bootstrap_servers=[KAFKA_SERVERS],
        value_serializer=lambda v: json.dumps(v).encode('utf-8'),
        acks='all',
        retries=3
    )
except Exception as e:
    print(f"Kafka 연결 실패: {e}")
    producer = None

# 모델 초기화
CONFIDENCE_THRESHOLD = 0.5
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"\ndevice: {device}\n")
# model = YOLO(script_dir / "bee_yolov8_detection.pt").to(device)
model = YOLO(script_dir / "best.pt")  # 250825: 재학습 모델로 변경

# 데이터 모델
class ImageAnalysisRequest(BaseModel):
    userId: str
    imageUrl: str

class BoundingBox(BaseModel):
    x: int
    y: int
    width: int
    height: int

class DetectedObject(BaseModel):
    label: str
    confidence: float
    boundingBox: BoundingBox

class ImageAnalysisResult(BaseModel):
    userId: str
    imageUrl: str
    resultImagePath: str
    detectedObjects: List[DetectedObject]

def upload_image(image_cv: np.ndarray, image_url: str) -> str:
    """이미지 업로드 (Azure 또는 로컬)"""
    filename = f"{Path(image_url).stem}_{uuid.uuid4().hex[:8]}.jpg"
    
    _, buffer = cv2.imencode(".jpg", image_cv)
    image_bytes = buffer.tobytes()

    if USE_AZURE_STORAGE and blob_service_client:
        blob_name = f"results/{filename}"
        blob_client = blob_service_client.get_blob_client(container=AZURE_CONTAINER_NAME, blob=blob_name)
        blob_client.upload_blob(image_bytes, overwrite=True, 
                              content_settings=ContentSettings(content_type='image/jpeg'))
        return blob_client.url
    
    # 로컬 저장
    save_path = script_dir / LOCAL_OUTPUT_DIR / filename
    save_path.parent.mkdir(parents=True, exist_ok=True)
    save_path.write_bytes(image_bytes)
    return f"{LOCAL_IMAGE_SERVER_BASE_URL}/results/{filename}"

def yolo_detect_image(request: ImageAnalysisRequest):
    """이미지 분석 처리"""
    # 이미지 다운로드 및 디코딩
    response = requests.get(request.imageUrl, timeout=30)
    response.raise_for_status()
    image_data = np.frombuffer(response.content, np.uint8)
    image_cv = cv2.imdecode(image_data, cv2.IMREAD_COLOR)

    # 객체 탐지
    results = model(image_cv)
    detected_objects = []
    
    for box in results[0].boxes:
        confidence = box.conf[0].item()
        if confidence < CONFIDENCE_THRESHOLD:
            continue
            
        coords = box.xyxy[0].cpu().numpy().astype(int)
        x1, y1, x2, y2 = coords
        label_name = model.names[box.cls[0].item()]
        
        detected_objects.append(DetectedObject(
            label=label_name,
            confidence=confidence,
            boundingBox=BoundingBox(x=x1, y=y1, width=x2-x1, height=y2-y1)
        ))
        
        # 결과 이미지에 박스 그리기
        cv2.rectangle(image_cv, (x1, y1), (x2, y2), (0, 255, 0), 2)
        cv2.putText(image_cv, f"{label_name}: {confidence:.2f}", 
                   (x1, y1-10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    # 결과 이미지 업로드
    result_image_path = upload_image(image_cv, request.imageUrl)
    
    # 결과 생성
    result = ImageAnalysisResult(
        userId=request.userId,
        imageUrl=request.imageUrl,
        resultImagePath=result_image_path,
        detectedObjects=detected_objects
    )
    
    # Kafka 발행
    if producer:
        try:
            message = {
                "event_id": str(uuid.uuid4()),
                "timestamp": int(time.time() * 1000),
                "data": result.model_dump()
            }
            producer.send(KAFKA_TOPIC, key=request.userId, value=message)
            print("Kafka 발행 완료")
        except Exception as e:
            print(f"Kafka 발행 실패: {e}")
    
    return result