from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.sessions import SessionMiddleware
from fastapi.templating import Jinja2Templates
from openai import OpenAI
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY","change_this"))
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def get_form(request: Request):
    history = request.session.get("history", [])
    return templates.TemplateResponse("chat.html", {"request": request, "history": history})

@app.post("/", response_class=HTMLResponse)
async def post_form(request: Request, question: str = Form(...)):
    history = request.session.get("history", [])
    # 사용자 메시지에 timestamp 추가
    history.append({
        "role": "user",
        "content": question,
        "time": datetime.now().strftime("%H:%M")
    })

    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": m["role"], "content": m["content"]} for m in history]
    )
    answer = resp.choices[0].message.content

    # 챗봇 답변에도 timestamp
    history.append({
        "role": "assistant",
        "content": answer,
        "time": datetime.now().strftime("%H:%M")
    })

    request.session["history"] = history
    return templates.TemplateResponse("chat.html", {"request": request, "history": history})
