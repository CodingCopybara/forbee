# main.py
import os, json, asyncio, traceback
from datetime import datetime
from dotenv import load_dotenv
from fastapi import FastAPI, Form, Request, Query
from fastapi.responses import HTMLResponse, StreamingResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from pydantic import BaseModel

from services.custom_functions import provide_recommendation_url
from services.openai_client import client, aclient, FILE_SEARCH_RES
from services.tools import run_open_link

load_dotenv()

app = FastAPI()

# --- 미들웨어 설정 ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY", "chg"))

# --- 정적 파일/템플릿 ---
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# --- 시스템 프롬프트 ---
HELP_SYSTEM = "\n".join([
    "너는 우리 사이트의 '이용 센터' 챗봇이다.",
    "우선순위: (1) 지식문서(File Search) 근거 기반 답변 (2) 요청 시 은행/허니몰 링크 제공 (3) 불확실하면 추가정보 요청.",
    "약관/공지/이용방법 질문에는 관련 조항을 간단히 요약하고, [출처: 문서명/버전] 한 줄로 표시한다.",
    "링크 요청 시 open_link 도구를 호출해 화이트리스트 URL만 제공한다.",
    "항상 존댓말, 불필요한 수다 금지."
])

# --- 툴 설정 ---
TOOLS_BASE = [{
    "type": "function",
    "function": {
        "name": "open_link",
        "description": "은행 또는 허니몰 링크를 반환한다.",
        "parameters": {
            "type": "object",
            "properties": {
                "target": {"type": "string", "enum": ["bank", "honeymall"]}
            },
            "required": ["target"],
            "additionalProperties": False
        }
    }
}]
TOOLS = TOOLS_BASE + ([{"type": "file_search"}] if FILE_SEARCH_RES else [])

# --- 요청/응답 모델 ---
class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

# --- URL 직접 호출 API ---
@app.get("/get_url")
def get_url(question: str = Query(..., description="사용자 질문")):
    return provide_recommendation_url(question)

# --- 불필요 문구 제거 함수 ---
def clean_ai_answer(raw_answer: str) -> str:
    """
    AI 응답에서 '모른다' 류의 불필요한 안내 문구 제거
    """
    remove_phrases = [
        "업로드하신 문서 내에서는",
        "확인되지 않았습니다",
        "자료를 제공해 주시면 확인해 드리겠습니다"
    ]
    lines = raw_answer.splitlines()
    cleaned_lines = []
    for line in lines:
        if not any(p in line for p in remove_phrases):
            cleaned_lines.append(line.strip())
    return "\n".join([l for l in cleaned_lines if l]).strip()

# --- 동기 헬프센터 실행 ---
def run_help_center_sync(messages: list[dict]) -> str:
    from services.openai_client import client, FILE_SEARCH_RES

    question = next((m["content"] for m in reversed(messages) if m.get("role") == "user"), "안내가 필요하신가요?")

    assistant = client.beta.assistants.create(
        name="Help Center",
        model="gpt-4.1-mini",
        instructions=HELP_SYSTEM,
        tools=[
            {"type": "file_search"},
            {"type": "function", "function": {
                "name": "open_link",
                "description": "은행 또는 허니몰 링크를 반환한다.",
                "parameters": {
                    "type": "object",
                    "properties": {"target": {"type": "string", "enum": ["bank", "honeymall"]}},
                    "required": ["target"],
                    "additionalProperties": False
                }
            }},
        ],
        tool_resources=FILE_SEARCH_RES,
    )

    thread = client.beta.threads.create(messages=[{"role": "user", "content": question}])
    run = client.beta.threads.runs.create_and_poll(thread_id=thread.id, assistant_id=assistant.id)
    if run.status != "completed":
        return f"[WARN] run status: {run.status}"

    msgs = client.beta.threads.messages.list(thread_id=thread.id, order="desc", limit=1)
    if not msgs.data:
        return "[WARN] 응답 없음"

    parts = []
    for c in msgs.data[0].content:
        if getattr(c, "type", None) == "text" and getattr(c, "text", None):
            parts.append(c.text.value)
    return "\n\n".join(parts) if parts else "[WARN] 빈 응답"

# --- 메시지 빌드 ---
def _build_messages(history, user_text: str):
    return [{"role": "system", "content": HELP_SYSTEM}] + history + [{"role": "user", "content": user_text}]

# --- 스트리밍 실행 ---
async def stream_help_center(messages):
    stream = await aclient.responses.create(
        model="gpt-4.1-mini",
        input=messages,
        tools=TOOLS,
        tool_resources=FILE_SEARCH_RES if FILE_SEARCH_RES else None,
        stream=True
    )
    async for event in stream:
        et = getattr(event, "type", None)
        if et in ("response.output_text.delta", "response.text.delta"):
            yield event.delta
        elif et in ("response.completed", "response.done"):
            break

# --- /api/help ---
@app.post("/api/help", response_model=ChatResponse)
async def help_api(req: ChatRequest, request: Request):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": req.question})

    messages = _build_messages(session_history[:-1], req.question)
    raw_answer = await asyncio.to_thread(run_help_center_sync, messages)

    # 1) 불필요 문구 제거
    answer = clean_ai_answer(raw_answer)

    # 2) URL 추천
    url = provide_recommendation_url(req.question)
    if url:
        answer += f"\n\n🔗 관련 상품/정보: {url}"

    session_history.append({
        "role": "assistant",
        "content": answer,
        "time": datetime.now().strftime("%H:%M")
    })
    request.session["history"] = session_history
    return ChatResponse(answer=answer)

# --- /api/help/stream ---
@app.post("/api/help/stream")
async def help_stream(req: ChatRequest, request: Request):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": req.question})
    messages = _build_messages(session_history[:-1], req.question)

    async def gen():
        collected = ""
        async for chunk in stream_help_center(messages):
            collected += chunk
            yield chunk
        # 스트리밍 끝나고 세션 저장
        final_answer = clean_ai_answer(collected)
        url = provide_recommendation_url(req.question)
        if url:
            final_answer += f"\n\n🔗 관련 상품/정보: {url}"
        session_history.append({
            "role": "assistant",
            "content": final_answer,
            "time": datetime.now().strftime("%H:%M")
        })
        request.session["history"] = session_history

    return StreamingResponse(gen(), media_type="text/plain")

# --- 기타 라우트 ---
@app.get("/health")
def health():
    try:
        tools = []
        for t in TOOLS:
            tools.append(t["function"]["name"] if t.get("type") == "function" else "file_search")
    except Exception:
        tools = ["(unknown)"]
    return {"ok": True, "file_search": bool(FILE_SEARCH_RES), "tools": tools}

@app.get("/ping")
def ping():
    return {"pong": True}

@app.get("/__routes")
def list_routes():
    return sorted({getattr(r, "path", str(r)) for r in app.router.routes})

@app.get("/__whereami")
def whereami():
    import pathlib, sys
    return {
        "main_file": str(pathlib.Path(__file__).resolve()),
        "pythonpath": sys.path[:5],
    }

@app.get("/", include_in_schema=False)
def root():
    return {"status": "ok", "see": ["/docs", "/api/health", "/api/help"]}

@app.get("/api/health")
def health_api():
    return {"ok": True}

@app.exception_handler(Exception)
async def _all_exc_handler(request: Request, exc: Exception):
    traceback.print_exc()
    return JSONResponse(status_code=500, content={"error": type(exc).__name__, "detail": str(exc)})
