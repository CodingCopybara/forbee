# 터미널에서 실행 : uvicorn main:app --reload

import os
import io
import uuid
from typing import List
import json

import cv2
import numpy as np
import requests
import torch
# from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from PIL import Image
from ultralytics import YOLO
from kafka import KafkaProducer


# --- 1. 환경 설정 및 모델 로드 ---

# .env 파일에서 환경 변수 로드
load_dotenv()

# FastAPI 앱 초기화
app = FastAPI(title="AI Object Detection Service")

# 설정 변수
MODEL_PATH = "bee_yolov8_detection.pt"
CONFIDENCE_THRESHOLD = 0.5
LOCAL_OUTPUT_DIR = "results"  # 결과 로컬 저장 (테스트)

# Azure Blob Storage 클라이언트 초기화
# try:
#     AZURE_CONNECTION_STRING = os.environ["AZURE_CONNECTION_STRING"]
#     AZURE_CONTAINER_NAME = os.environ["AZURE_CONTAINER_NAME"]
#     blob_service_client = BlobServiceClient.from_connection_string(AZURE_CONNECTION_STRING)
# except KeyError as e:
#     raise RuntimeError(f"환경 변수 {e}가 설정되지 않았습니다. .env 파일을 확인하세요.") from e

# 에이전트 서비스 URL
# AGENT_SERVICE_URL = os.environ.get("AGENT_SERVICE_URL")

# Kafka Producer 초기화 (환경 변수 등에서 설정 가져오기)
KAFKA_BOOTSTRAP_SERVERS = os.environ.get("KAFKA_BOOTSTRAP_SERVERS", "localhost:9092")
producer = KafkaProducer(
    bootstrap_servers=[KAFKA_BOOTSTRAP_SERVERS],
    value_serializer=lambda v: json.dumps(v).encode('utf-8') # 결과를 JSON으로 직렬화
)

# YOLO 모델 로드 (애플리케이션 시작 시 한 번만)
if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError(f"모델 파일 '{MODEL_PATH}'를 찾을 수 없습니다.")
device = "cuda" if torch.cuda.is_available() else "cpu"
model = YOLO(MODEL_PATH)
model.to(device)
print(f"device: {device}")


# --- 2. 데이터 모델 정의 (Pydantic) ---

class ImageAnalysisRequest(BaseModel):
    source_image_path: str

class BoundingBox(BaseModel):
    box: List[int]  # [x1, y1, x2, y2]
    label: str
    score: float

class ImageAnalysisResponse(BaseModel):
    result_image_path: str
    detections: List[BoundingBox]


# --- 3. 헬퍼 함수 ---

# def notify_agent_service(result_data: dict):
#     """백그라운드에서 에이전트 서비스에 결과를 POST로 전송"""
#     if not AGENT_SERVICE_URL:
#         print("Warning: AGENT_SERVICE_URL이 설정되지 않아 알림을 보내지 않습니다.")
#         return

#     try:
#         response = requests.post(AGENT_SERVICE_URL, json=result_data, timeout=5)
#         response.raise_for_status()  # 2xx 상태 코드가 아니면 예외 발생
#         print(f"Agent 서비스에 성공적으로 알림을 보냈습니다. 상태 코드: {response.status_code}")
#     except requests.exceptions.RequestException as e:
#         print(f"Error: Agent 서비스에 알림을 보내는 데 실패했습니다. - {e}")


# --- 4. FastAPI 엔드포인트 ---

@app.post("/analyze")
async def analyze_image(request: ImageAnalysisRequest):
    """Azure Storage의 이미지를 분석하고 결과를 Kafka 토픽에 발행합니다."""
    try:
        # 1. Azure에서 이미지 다운로드
        # blob_client = blob_service_client.get_blob_client(container=AZURE_CONTAINER_NAME, blob=request.source_image_path)
        # image_bytes = blob_client.download_blob().readall()
        # image_pil = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        # 1. 로컬 경로에서 이미지 불러오기 (테스트 용)
        if not os.path.exists(request.source_image_path):
            raise HTTPException(status_code=404, detail=f"Local image not found: {request.source_image_path}")
        image_pil = Image.open(request.source_image_path).convert("RGB")

        image_cv = cv2.cvtColor(np.array(image_pil), cv2.COLOR_RGB2BGR)

        # 2. YOLO 모델 추론
        results = model(image_pil)

        # 3. 결과 처리 및 시각화
        detections = []
        for box in results[0].boxes:
            score = box.conf[0].item()
            if score > CONFIDENCE_THRESHOLD:
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

        # 4. 결과 이미지를 Azure에 업로드
        # result_filename = f"results/{os.path.splitext(os.path.basename(request.source_image_path))[0]}_{uuid.uuid4()}.jpg"
        # _, img_encoded = cv2.imencode(".jpg", image_cv)
        # result_blob_client = blob_service_client.get_blob_client(container=AZURE_CONTAINER_NAME, blob=result_filename)
        # result_blob_client.upload_blob(img_encoded.tobytes(), overwrite=True)

        # 4. 결과 이미지를 로컬에 저장
        os.makedirs(LOCAL_OUTPUT_DIR, exist_ok=True)
        base_filename = os.path.basename(request.source_image_path)
        name, ext = os.path.splitext(base_filename)
        result_filename = f"{name}_{uuid.uuid4().hex[:8]}{ext}"
        result_filepath = os.path.join(LOCAL_OUTPUT_DIR, result_filename)
        cv2.imwrite(result_filepath, image_cv)

        # 5. Kafka에 발행할 최종 결과 생성
        response_data = ImageAnalysisResponse(
            # result_image_path=result_filename,
            result_image_path=result_filepath,  # 로컬 경로로 변경
            detections=detections
        )

        # 6. 결과를 Kafka 'analysis_results' 토픽으로 발행
        producer.send('analysis_results_topic', value=response_data.dict())
        producer.flush() # 메시지가 확실히 전송되도록 보장
        
        print(f"분석 결과를 Kafka 토픽 'analysis_results_topic'에 발행했습니다.")

        # 7. 클라이언트에는 요청이 잘 접수되었음을 알림
        return {"status": "success", "message": "이미지 분석 요청이 접수되었습니다. 결과는 Kafka를 통해 전송됩니다."}

    except Exception as e:
        print(f"Error during analysis: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "ok"}