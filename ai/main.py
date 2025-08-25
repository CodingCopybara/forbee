from fastapi import FastAPI, UploadFile, File, BackgroundTasks, Request, Header, HTTPException
from pydantic import BaseModel
from typing import List
import os
from dotenv import load_dotenv

# ========== AGENT 관련 ==========
from agent.agent import run_agent, process_user_answers_with_state
from langchain.memory import ConversationBufferMemory

# ========== YOLO 관련 ==========
from src.main.python.bee_yolov8_detection import yolo_detect_image  # 함수로 분리할 것!

# ========== Kafka 등 기타 필요 모듈 import ==========
# (필요하다면 여기서 KafkaProducer 등 공용 객체 초기화)

# --------- FastAPI 인스턴스 (한 번만!!) ---------
app = FastAPI()

# CORS 등 추가 설정 필요시 여기에
# from cors_config import setup_cors
# setup_cors(app)

# 환경 변수 불러오기
load_dotenv()

# ----- AGENT용: 사용자별 LangChain 메모리 관리 -----
user_memory = {}
def get_user_memory(userId: str):
    if userId not in user_memory:
        user_memory[userId] = ConversationBufferMemory(return_messages=True)
    return user_memory[userId]

# ===================== 데이터 모델 =====================
class DiagnoseRequest(BaseModel):
    disease_name: str
    confidence: float

class AnswerRequest(BaseModel):
    answers: List[str]

class ImageAnalysisRequest(BaseModel):
    userId: str
    imageUrl: str

# ===================== 엔드포인트 =====================

@app.get("/")
def root():
    return {"message": "FastAPI YOLO+Agent 통합 서버"}

# 1. YOLO 객체 탐지 (예시: 이미지 URL 업로드)
@app.post("/object-detection")
def analyze_image(request: ImageAnalysisRequest, background_tasks: BackgroundTasks):
    # 실제 YOLO 추론 함수는 bee_yolov8_detection.py에서 import
    # 비동기로 처리, 결과는 Kafka로 publish
    background_tasks.add_task(yolo_detect_image, request)
    return {"status": "accepted"}

# 2. 에이전트 - 진단 (diagnose)
@app.post("/diagnose")
def diagnose(req: DiagnoseRequest, userId: str = Header(alias="userId")):
    if not userId:
        raise HTTPException(status_code=400, detail="Missing userId in headers")
    memory = get_user_memory(str(userId))
    result = run_agent(userId, req.disease_name, req.confidence, memory)
    return result

# 3. 에이전트 - 추가 질문 답변 (answer)
@app.post("/answer")
def answer(req: AnswerRequest, userId: str = Header(alias="userId")):
    if not userId:
        raise HTTPException(status_code=400, detail="Missing userId in headers")
    memory = get_user_memory(str(userId))
    result = process_user_answers_with_state(userId, req.answers, memory)
    return result

# 4. 헬스체크(선택)
@app.get("/health")
def health_check():
    return {"status": "healthy"}

