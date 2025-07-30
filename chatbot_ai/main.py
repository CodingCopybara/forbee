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
    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role":"system","content":"당신은 양봉 전문가입니다..."},
            {"role":"user","content":q}
        ]
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
