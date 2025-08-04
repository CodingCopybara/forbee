# uvicorn main:app --reload
# source .venv/bin/activate

import os
import uuid
from typing import List
import json
from pathlib import Path
from urllib.parse import urlparse
import cv2
import numpy as np
import requests
import torch
from dotenv import load_dotenv
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from ultralytics import YOLO
# from kafka import KafkaProducer  # 임시 비활성화
from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient, ContentSettings

load_dotenv()
script_dir = Path(__file__).parent.resolve()
app = FastAPI(title="Object Detection Service")

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

# 임시 비활성화 - Kafka 의존성 제거로 인해
# KAFKA_BOOTSTRAP_SERVERS = os.environ.get("KAFKA_BOOTSTRAP_SERVERS", "localhost:19092")
# producer = KafkaProducer(
#     key_serializer=str.encode,
#     bootstrap_servers=[KAFKA_BOOTSTRAP_SERVERS],
#     value_serializer=lambda v: json.dumps(v).encode('utf-8')
# )

MODEL_PATH = "bee_yolov8_detection.pt"
CONFIDENCE_THRESHOLD = 0.5
model_full_path = script_dir / MODEL_PATH
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"\ndevice: {device}\n")
model = YOLO(model_full_path)
model.to(device)

# Pydantic
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
    parsed_url = urlparse(image_url)
    clean_path = Path(parsed_url.path)
    result_filename = f"{clean_path.stem}_{uuid.uuid4().hex[:8]}{clean_path.suffix}"

    is_success, buffer = cv2.imencode(".jpg", image_cv)
    if not is_success:
        raise ValueError("결과 이미지 JPEG 인코딩 실패")
    image_bytes = buffer.tobytes()

    if USE_AZURE_STORAGE and blob_service_client:
        blob_name = (LOCAL_OUTPUT_DIR / result_filename).as_posix()
        blob_client = blob_service_client.get_blob_client(container=AZURE_CONTAINER_NAME, blob=blob_name)
        blob_client.upload_blob(image_bytes, overwrite=True, content_settings=ContentSettings(content_type='image/jpeg'))
        return blob_client.url
    else:
        save_path = script_dir / LOCAL_OUTPUT_DIR / result_filename
        save_path.parent.mkdir(parents=True, exist_ok=True)
        save_path.write_bytes(image_bytes)
        url_path = (LOCAL_OUTPUT_DIR / result_filename).as_posix()
        image_url = f"{LOCAL_IMAGE_SERVER_BASE_URL}/{url_path}"
        return image_url

def process(request: ImageAnalysisRequest):
    response = requests.get(request.imageUrl, stream=True, timeout=20)
    response.raise_for_status()
    image_data = np.frombuffer(response.content, np.uint8)
    image_cv = cv2.imdecode(image_data, cv2.IMREAD_COLOR)


    results = model(image_cv)

    detectedObjects = []
    for box in results[0].boxes:
        confidence = box.conf[0].item()
        if confidence < CONFIDENCE_THRESHOLD:
            continue
        coords = box.xyxy[0].cpu().numpy().astype(int)
        label_id = box.cls[0].item()
        label_name = model.names[label_id]
        x1, y1, x2, y2 = coords
        bbox = BoundingBox(x=x1, y=y1, width=x2 - x1, height=y2 - y1)
        detectedObjects.append(
            DetectedObject(label=label_name, confidence=confidence, boundingBox=bbox)
        )
        cv2.rectangle(image_cv, (x1, y1), (x2, y2), (0, 255, 0), 2)
        text = f"{label_name}: {confidence:.2f}"
        cv2.putText(image_cv, text, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

    resultImagePath = upload_image(image_cv, request.imageUrl)

    # Kafka - 임시 비활성화
    response_data = ImageAnalysisResult(
        userId=request.userId,
        imageUrl=request.imageUrl,
        resultImagePath=resultImagePath,
        detectedObjects=detectedObjects
    )
    
    # Kafka 전송 비활성화 - 로그로 대체
    print(f"분석 완료 (Kafka 비활성화): {response_data.model_dump()}")
    
    # kafka_topic = "forbee"
    # producer.send(kafka_topic, key=request.userId, value=response_data.model_dump())
    # producer.flush()

@app.post("/object-detection")
async def analyze_image(request: ImageAnalysisRequest, background_tasks: BackgroundTasks):
    background_tasks.add_task(process, request)
    return {"status": "accepted"}
