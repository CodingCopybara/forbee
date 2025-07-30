import os
from dotenv import load_dotenv
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.sessions import SessionMiddleware
from jinja2 import TemplateNotFound
from fastapi.templating import Jinja2Templates
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

# 세션 미들웨어
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY", "change_this"))

# 정적 파일 (CSS 등) 서빙
app.mount("/static", StaticFiles(directory="static"), name="static")

# Jinja2 템플릿 설정
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def get_form(request: Request):
    history = request.session.get("history", [])
    return templates.TemplateResponse("chat.html", {
        "request": request,
        "history": history
    })

@app.post("/", response_class=HTMLResponse)
async def post_form(request: Request, question: str = Form(...)):
    history = request.session.get("history", [])
    history.append({"role": "user", "content": question})

    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "당신은 양봉 전문가입니다. 초보자에게 친절하게 설명합니다."},
            *[{"role": m["role"], "content": m["content"]} for m in history],
        ]
    )
    answer = resp.choices[0].message.content
    history.append({"role": "assistant", "content": answer})

    request.session["history"] = history
    return templates.TemplateResponse("chat.html", {
        "request": request,
        "history": history
    })
