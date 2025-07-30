import os
from dotenv import load_dotenv
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from starlette.middleware.sessions import SessionMiddleware
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key="your_secret_key")

# HTML 템플릿
html = """
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>양봉 챗봇</title>
  <style>
    body {{ font-family: sans-serif; }}
    .chat-box {{ width: 600px; margin: auto; }}
    .message {{ padding: 8px 12px; border-radius: 12px; margin: 6px 0; max-width: 80%; }}
    .user {{ background: #dcf8c6; margin-left: auto; }}
    .bot  {{ background: #f1f0f0; margin-right: auto; }}
    textarea {{ width: 100%; box-sizing: border-box; }}
  </style>
</head>
<body>
  <div class="chat-box">
    <h2>🐝 양봉 전문가 챗봇</h2>
    {chat_history}
    <form method="post">
      <textarea name="question" rows="3" placeholder="질문하세요..." required></textarea><br>
      <input type="submit" value="전송">
    </form>
  </div>
</body>
</html>
"""

def render_history(history):
    html_snippets = []
    for msg in history:
        cls = "user" if msg["role"]=="user" else "bot"
        who = "나" if msg["role"]=="user" else "챗봇"
        html_snippets.append(
            f'<div class="message {cls}"><strong>{who}:</strong> {msg["content"]}</div>'
        )
    return "\n".join(html_snippets)

@app.get("/", response_class=HTMLResponse)
async def get_form(request: Request):
    history = request.session.get("history", [])
    return html.format(chat_history=render_history(history))

@app.post("/", response_class=HTMLResponse)
async def post_form(request: Request, question: str = Form(...)):
    # 세션 히스토리 불러오기
    history = request.session.get("history", [])
    # 나의 질문 추가
    history.append({"role":"user", "content": question})

    # OpenAI 호출
    resp = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "당신은 양봉 전문가입니다. 초보자에게 친절하게 설명합니다."},
            *[{"role": m["role"], "content": m["content"]} for m in history if m["role"]!="system"],
            {"role": "user", "content": question}
        ]
    )
    answer = resp.choices[0].message.content

    # 챗봇 답변 추가
    history.append({"role":"assistant", "content": answer})
    request.session["history"] = history

    # 렌더링
    return html.format(chat_history=render_history(history))
