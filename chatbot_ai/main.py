# main.py
import os
from datetime import datetime
from dotenv import load_dotenv
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from pydantic import BaseModel
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Pydantic 모델
class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

app = FastAPI()
# (1) CORS: Spring Boot → Python 호출 허용
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # Spring Boot origin
    allow_methods=["POST"],
    allow_headers=["*"],
)
# (2) 세션/템플릿/UI: 원래 구현한 HTML UI
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY","chg"))
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# OpenAI 헬퍼
async def get_answer_from_openai(q: str) -> str:
    # 시스템 프롬프트 정의
    system_prompt = (
        "당신은 양봉 전문가이자 꿀벌의 시점에서 모든 질문에 답변하는 챗봇입니다. "
        "사용자가 묻는 질문을 꿀벌과 양봉 관점에서 창의적이고 재미있게 답변하세요. "
        "예를 들어, '취미는 뭐야?'라고 묻는다면 꿀벌의 취미를 이야기하고, '오늘의 날씨는?'이라고 묻는다면 양봉에 적합한 날씨인지 평가하여 설명하세요."
    )
    # 메시지 배열 생성
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user",   "content": q}
    ]
    # OpenAI API 호출
    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    return resp.choices[0].message.content

# (A) JSON API
@app.post("/chat", response_model=ChatResponse)
async def chat_api(req: ChatRequest):
    ans = await get_answer_from_openai(req.question)
    return ChatResponse(answer=ans)

# (B) HTML UI (기존)
@app.get("/", response_class=HTMLResponse)
async def get_form(request: Request):
    history = request.session.get("history", [])
    return templates.TemplateResponse("chat.html", {"request":request, "history":history})

@app.post("/", response_class=HTMLResponse)
async def post_form(request: Request, question: str = Form(...)):
    hist = request.session.setdefault("history", [])
    hist.append({"role":"user","content":question,"time":datetime.now().strftime("%H:%M")})
    ans = await get_answer_from_openai(question)
    hist.append({"role":"assistant","content":ans,"time":datetime.now().strftime("%H:%M")})
    request.session["history"] = hist
    return templates.TemplateResponse("chat.html", {"request":request, "history":hist})
