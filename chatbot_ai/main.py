# main.py
import os
from datetime import datetime
from dotenv import load_dotenv
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from pydantic import BaseModel
from openai import OpenAI
import asyncio

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Pydantic 모델
class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 템플릿 & 정적파일 설정
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY", "chg"))
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# 시스템 프롬프트
SYSTEM_PROMPT = (
    "당신은 양봉 전문가이자 꿀벌의 시점에서 모든 질문에 답변하는 챗봇입니다. "
    "사용자가 묻는 질문을 꿀벌과 양봉 관점에서 창의적이고 재미있게 답변하세요."
)

# ✅ 전체 메시지를 받아 GPT 호출
async def get_answer_from_openai(messages: list[dict]) -> str:
    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        SYSTEM_PROMPT = (
            "당신은 양봉 전문가이자 데이터 분석 기반의 챗봇입니다. "
            "모든 질문에 대해 감성 표현 없이 수치, 통계, 논리, 사실 기반으로 간결하게 답변하세요. "
            "간결하게 답합니"
            "..."
        ),
        messages=messages
    )
    return resp.choices[0].message.content

# ✅ 스트리밍 응답
async def stream_openai_answer(messages: list[dict]):
    stream = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages,
        stream=True
    )
    for chunk in stream:
        content = chunk.choices[0].delta.content
        if content:
            yield content
            await asyncio.sleep(0.02)

# ✅ (A) JSON API: 히스토리 기반 답변
@app.post("/chat", response_model=ChatResponse)
async def chat_api(req: ChatRequest, request: Request):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": req.question})

    full_messages = [{"role": "system", "content": SYSTEM_PROMPT}] + session_history
    answer = await get_answer_from_openai(full_messages)

    session_history.append({"role": "assistant", "content": answer})
    request.session["history"] = session_history

    return ChatResponse(answer=answer)

# ✅ (A-2) 스트리밍 API
@app.post("/chat/stream")
async def chat_stream(req: ChatRequest, request: Request):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": req.question})

    full_messages = [{"role": "system", "content": SYSTEM_PROMPT}] + session_history
    async def response_stream():
        async for chunk in stream_openai_answer(full_messages):
            yield chunk

    return StreamingResponse(response_stream(), media_type="text/plain")

# ✅ (B) HTML GET
@app.get("/", response_class=HTMLResponse)
async def get_form(request: Request):
    history = request.session.get("history", [])
    return templates.TemplateResponse("chat.html", {"request": request, "history": history})

# ✅ (B-2) HTML POST
@app.post("/", response_class=HTMLResponse)
async def post_form(request: Request, question: str = Form(...)):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": question, "time": datetime.now().strftime("%H:%M")})

    full_messages = [{"role": "system", "content": SYSTEM_PROMPT}] + [
        {k: v for k, v in m.items() if k in ["role", "content"]} for m in session_history
    ]
    answer = await get_answer_from_openai(full_messages)

    session_history.append({"role": "assistant", "content": answer, "time": datetime.now().strftime("%H:%M")})
    request.session["history"] = session_history

    return templates.TemplateResponse("chat.html", {"request": request, "history": session_history})
