# FAST API, 엔드포인트 정의
# state는 LangChain Memory에서 관리
from fastapi import FastAPI, Request, Header, HTTPException
from pydantic import BaseModel
from agent import *
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain.chat_models import ChatOpenAI
from dotenv import load_dotenv
from cors_config import setup_cors

app = FastAPI()
setup_cors(app)

load_dotenv("/workspace/forbee/ai/src/main/java/forbee/infra/.env")
print("[INFO] OPENAI_API_KEY loaded:", os.getenv("OPENAI_API_KEY") is not None)

# 전역 메모리 (사용자별 관리용 dict)
user_memory = {}

class DiagnoseRequest(BaseModel):
    disease_name: str
    confidence: float

class AnswerRequest(BaseModel):
    answers: list[str]

def get_user_memory(userId: str):
    """
    사용자별 memory 객체 반환
    """
    if userId not in user_memory:
        user_memory[userId] = ConversationBufferMemory(return_messages=True)
    return user_memory[userId]

@app.get("/")
def read_root():
    return {"message": "FastAPI is running"}

# 나중에 YOLO에서 받아오는걸로 수정해야함
@app.post("/diagnose")
def diagnose(req: DiagnoseRequest, userId: int = Header(None)):
    # state = {
    #     "disease_name": req.disease_name,
    #     "confidence": req.confidence,
    # }
    if not userId:
        raise HTTPException(status_code=400, detail="Missing userId in headers")

    memory = get_user_memory(userId)
    result = run_agent(userId, req.disease_name, req.confidence, memory)

    return result

@app.post("/answer")
def answer(req: AnswerRequest, userId: int = Header(None)):
    # 사용자 답변 memory에 기록
    if not userId:
        raise HTTPException(status_code=400, detail="Missing userId in headers")

    memory = get_user_memory(userId)
    result = process_user_answers_with_state(userId, req.answers, memory)

    return result
