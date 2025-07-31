# 터미널에서 실행 : uvicorn main:app --reload --host 0.0.0.0

import os
import io
import uuid
from typing import List
import json
import logging

import cv2
import numpy as np
import requests
import torch
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from PIL import Image
from ultralytics import YOLO
from kafka import KafkaProducer


# --- 1. 환경 설정 및 모델 로드 ---

# 로깅 설정
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# .env 파일에서 환경 변수 로드
load_dotenv()

# FastAPI 앱 초기화
app = FastAPI(title="AI Object Detection Service")

# 스크립트의 위치를 기준으로 절대 경로를 생성하기 위해 script_dir 정의
script_dir = os.path.dirname(os.path.abspath(__file__))

# --- 2. 설정 및 초기화 ---

MODEL_PATH = "bee_yolov8_detection.pt"
CONFIDENCE_THRESHOLD = 0.5

# --- 로컬/클라우드 저장소 설정 ---
# USE_LOCAL_STORAGE가 'true'이면 Azure 대신 로컬 파일 서버를 사용합니다.
USE_LOCAL_STORAGE = os.environ.get("USE_LOCAL_STORAGE", "false").lower() == "true"
LOCAL_OUTPUT_DIR = "results"  # 로컬에 저장될 디렉토리 이름
LOCAL_IMAGE_SERVER_BASE_URL = os.environ.get("LOCAL_IMAGE_SERVER_BASE_URL", "http://localhost:8002")

blob_service_client = None
if not USE_LOCAL_STORAGE:
    logging.info("--- Running in CLOUD (Azure) mode. ---")
    try:
        from azure.storage.blob import BlobServiceClient
        AZURE_CONNECTION_STRING = os.environ["AZURE_CONNECTION_STRING"]
        AZURE_CONTAINER_NAME = os.environ["AZURE_CONTAINER_NAME"]
        blob_service_client = BlobServiceClient.from_connection_string(AZURE_CONNECTION_STRING)
    except KeyError as e:
        raise RuntimeError(f"Azure 사용 설정이나, 환경 변수 {e}가 설정되지 않았습니다. .env 파일을 확인하세요.") from e
else:
    logging.info(f"--- Running in LOCAL mode. Results will be served from %s/%s ---", LOCAL_IMAGE_SERVER_BASE_URL, LOCAL_OUTPUT_DIR)


# Kafka Producer 초기화 (환경 변수 등에서 설정 가져오기)
KAFKA_BOOTSTRAP_SERVERS = os.environ.get("KAFKA_BOOTSTRAP_SERVERS", "localhost:9092")
producer = KafkaProducer(
    # Spring Cloud Stream의 기본 직렬화 방식과 맞추기 위해 key_serializer 추가
    key_serializer=str.encode,
    bootstrap_servers=[KAFKA_BOOTSTRAP_SERVERS],
    value_serializer=lambda v: json.dumps(v).encode('utf-8') # 결과를 JSON으로 직렬화
)

# YOLO 모델 로드 (애플리케이션 시작 시 한 번만)
model_full_path = os.path.join(script_dir, MODEL_PATH)
if not os.path.exists(model_full_path):
    raise FileNotFoundError(f"모델 파일 '{model_full_path}'를 찾을 수 없습니다.")
device = "cuda" if torch.cuda.is_available() else "cpu"
model = YOLO(model_full_path)
model.to(device)
logging.info("YOLO model loaded on device: %s", device)


# --- 3. 데이터 모델 정의 (Pydantic) ---

class ImageAnalysisRequest(BaseModel):
    userId: str
    imageUrl: str

class BoundingBox(BaseModel):
    box: List[int]  # [x1, y1, x2, y2]
    label: str
    score: float

class ImageAnalysisResult(BaseModel):
    userId: str
    imageUrl: str
    result_image_path: str
    detectedObjects: List[BoundingBox]


# --- 4. 핵심 로직 및 FastAPI 엔드포인트 ---

def process_analysis_in_background(request: ImageAnalysisRequest):
    """백그라운드에서 이미지 분석 및 Kafka 발행을 처리하는 함수"""
    try:
        # 1. Azure에서 이미지 다운로드
        # blob_client = blob_service_client.get_blob_client(container=AZURE_CONTAINER_NAME, blob=request.source_image_path)
        # image_bytes = blob_client.download_blob().readall()
        # image_pil = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        # 1. 로컬 경로에서 이미지 불러오기 (테스트 용)
        # if not os.path.exists(request.source_image_path):
        #     raise HTTPException(status_code=404, detail=f"Local image not found: {request.source_image_path}")
        # image_pil = Image.open(request.source_image_path).convert("RGB")

        # 1. Spring에서 전달받은 URL로부터 이미지 다운로드
        logging.info("Downloading image from: %s", request.imageUrl)
        response = requests.get(request.imageUrl, stream=True, timeout=10)
        response.raise_for_status()  # HTTP 에러가 발생하면 예외를 일으킴
        image_pil = Image.open(io.BytesIO(response.content)).convert("RGB")
        image_cv = cv2.cvtColor(np.array(image_pil), cv2.COLOR_RGB2BGR)

        # 2. YOLO 모델 추론
        logging.info("Running YOLO model inference...")
        results = model(image_pil)

        # 3. 결과 처리 및 시각화
        detections = []
        for box in results[0].boxes:
            score = box.conf[0].item()
            if score < CONFIDENCE_THRESHOLD:
                continue

            coords = box.xyxy[0].cpu().numpy().astype(int)
            label_id = box.cls[0].item()
            label_name = model.names[label_id]

            detections.append(
                BoundingBox(box=coords.tolist(), label=label_name, score=score)
            )

            # 이미지에 바운딩 박스 그리기
            cv2.rectangle(image_cv, (coords[0], coords[1]), (coords[2], coords[3]), (0, 255, 0), 2)
            text = f"{label_name}: {score:.2f}"
            cv2.putText(image_cv, text, (coords[0], coords[1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

        # 4. 결과 이미지를 저장하고 URL 생성
        base_filename = os.path.basename(request.imageUrl)
        name, ext = os.path.splitext(base_filename)
        result_filename = f"{name}_{uuid.uuid4().hex[:8]}{ext}"
        result_relative_path = os.path.join(LOCAL_OUTPUT_DIR, result_filename).replace(os.path.sep, '/')
        
        result_url = ""
        if USE_LOCAL_STORAGE:
            # 로컬 파일 서버의 디렉토리에 저장
            full_save_path = os.path.join(script_dir, result_relative_path)
            os.makedirs(os.path.dirname(full_save_path), exist_ok=True)
            cv2.imwrite(full_save_path, image_cv)
            logging.info("Result image saved locally to: %s", full_save_path)
            result_url = f"{LOCAL_IMAGE_SERVER_BASE_URL}/{result_relative_path}"
        else:
            # Azure Blob Storage에 업로드
            is_success, buffer = cv2.imencode(".jpg", image_cv)
            if not is_success:
                raise Exception("Failed to encode result image to JPEG format.")

            blob_client = blob_service_client.get_blob_client(container=AZURE_CONTAINER_NAME, blob=result_relative_path)
            blob_client.upload_blob(buffer.tobytes(), overwrite=True, content_settings={'content_type': 'image/jpeg'})
            logging.info("Result image uploaded to Azure Blob Storage: %s", result_relative_path)
            result_url = blob_client.url

        # 5. Kafka에 발행할 최종 결과 생성
        response_data = ImageAnalysisResult(
            userId=request.userId,
            imageUrl=request.imageUrl,
            result_image_path=result_url, # 생성된 URL (로컬 또는 Azure)
            detectedObjects=detections
        )

        # 6. 결과를 'forbee' 토픽으로 발행
        kafka_topic = "forbee"
        producer.send(kafka_topic, key=request.userId, value=response_data.dict())
        producer.flush() # 메시지가 확실히 전송되도록 보장
        logging.info("Analysis result for user '%s' published to Kafka topic '%s'.", request.userId, kafka_topic)

    except Exception as e:
        # 백그라운드 작업에서 에러 발생 시 로그만 남김 (필요시 에러 알림 시스템 연동)
        logging.error("Failed to process analysis for user '%s': %s", request.userId, e, exc_info=True)

@app.post("/object-detection")
async def analyze_image(request: ImageAnalysisRequest, background_tasks: BackgroundTasks):
    """
    Spring Boot로부터 이미지 분석 요청을 받아 백그라운드에서 처리합니다.
    요청을 즉시 수락하고 200 OK 응답을 반환합니다.
    """
    logging.info("Received analysis request for user: %s, image: %s", request.userId, request.imageUrl)
    # 실제 분석 작업은 백그라운드에서 수행하여 Spring WebClient가 오래 기다리지 않도록 함
    background_tasks.add_task(process_analysis_in_background, request)
    return {"status": "accepted", "message": "Image analysis request received and is being processed in the background."}

@app.get("/health")
def health_check():
    return {"status": "ok"}