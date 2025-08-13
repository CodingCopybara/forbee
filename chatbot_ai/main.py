# main.py
import os, json, asyncio
from datetime import datetime
from dotenv import load_dotenv
from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, StreamingResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from pydantic import BaseModel

import traceback
from services.openai_client import client, aclient, FILE_SEARCH_RES
from services.tools import run_open_link

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(SessionMiddleware, secret_key=os.getenv("SECRET_KEY", "chg"))
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

HELP_SYSTEM = "\n".join([
    "너는 우리 사이트의 '이용 센터' 챗봇이다.",
    "우선순위: (1) 지식문서(File Search) 근거 기반 답변 (2) 요청 시 은행/허니몰 링크 제공 (3) 불확실하면 추가정보 요청.",
    "약관/공지/이용방법 질문에는 관련 조항을 간단히 요약하고, [출처: 문서명/버전] 한 줄로 표시한다.",
    "링크 요청 시 open_link 도구를 호출해 화이트리스트 URL만 제공한다.",
    "항상 존댓말, 불필요한 수다 금지."
])

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

class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

def run_help_center_sync(messages: list[dict]) -> str:
    """
    File Search(벡터 스토어) + open_link 툴이 붙은 Assistants 방식으로 질의
    Responses API 파라미터(tool_resources 등) 이슈를 우회합니다.
    """
    from services.openai_client import client, FILE_SEARCH_RES

    # 마지막 user 메시지 추출
    question = next((m["content"] for m in reversed(messages) if m.get("role")=="user"), "안내가 필요하신가요?")

    # 어시스턴트 생성 (매 호출 새로 생성; 필요하면 ID를 .env에 저장해 재사용 가능)
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
        tool_resources=FILE_SEARCH_RES,  # services/openai_client.py 에서 VSID 바인딩됨
    )

    # 스레드 생성 + 질문 등록
    thread = client.beta.threads.create(messages=[{"role": "user", "content": question}])

    # 실행 + 완료까지 대기
    run = client.beta.threads.runs.create_and_poll(thread_id=thread.id, assistant_id=assistant.id)
    if run.status != "completed":
        return f"[WARN] run status: {run.status}"

    # 최신 답변 텍스트만 추출
    msgs = client.beta.threads.messages.list(thread_id=thread.id, order="desc", limit=1)
    if not msgs.data:
        return "[WARN] 응답 없음"

    parts = []
    for c in msgs.data[0].content:
        if getattr(c, "type", None) == "text" and getattr(c, "text", None):
            parts.append(c.text.value)
    return "\n\n".join(parts) if parts else "[WARN] 빈 응답"


def _extract_text(resp) -> str:
    """
    가능한 모든 경로에서 텍스트를 안전하게 추출.
    """
    # 1) SDK가 제공하는 합쳐진 텍스트
    text = getattr(resp, "output_text", None)
    if text:
        return text.strip()

    # 2) output 배열에서 message 타입 텍스트 수집
    out = []
    for o in getattr(resp, "output", []) or []:
        if getattr(o, "type", None) == "message":
            # o.content 는 [{type:"output_text"|"input_text"|..., text:"..."}...] 형태
            for c in getattr(o, "content", []) or []:
                t = getattr(c, "text", None) or getattr(c, "content", None)
                if t:
                    out.append(t)
    if out:
        return "\n".join(out).strip()

    return ""

def _iter_tool_calls(resp):
    for o in getattr(resp, "output", []) or []:
        if getattr(o, "type", None) == "tool_call":
            yield o

def _apply_tool(call):
    if call.tool_name == "open_link":
        return call.id, run_open_link(call.arguments or {})
    return call.id, {"ok": False, "reason": "unknown_tool"}

def _build_messages(history, user_text: str):
    return [{"role": "system", "content": HELP_SYSTEM}] + history + [{"role": "user", "content": user_text}]



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

@app.post("/api/help", response_model=ChatResponse)
async def help_api(req: ChatRequest, request: Request):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": req.question})

    messages = _build_messages(session_history[:-1], req.question)
    answer = await asyncio.to_thread(run_help_center_sync, messages)

    session_history.append({"role": "assistant", "content": answer, "time": datetime.now().strftime("%H:%M")})
    request.session["history"] = session_history
    return ChatResponse(answer=answer)

@app.post("/api/help/stream")
async def help_stream(req: ChatRequest, request: Request):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": req.question})
    messages = _build_messages(session_history[:-1], req.question)

    async def gen():
        async for chunk in stream_help_center(messages):
            yield chunk
    return StreamingResponse(gen(), media_type="text/plain")

@app.get("/health")
def health():
    try:
        tools = []
        for t in TOOLS:
            tools.append(t["function"]["name"] if t.get("type") == "function" else "file_search")
    except Exception:
        tools = ["(unknown)"]
    return {"ok": True, "file_search": bool(FILE_SEARCH_RES), "tools": tools}

# --- 진단용 라우트들 ---

@app.get("/ping")
def ping():
    return {"pong": True}

@app.get("/__routes")
def list_routes():
    # 실행 중인 앱에 등록된 경로를 간단히 리턴
    return sorted({getattr(r, "path", str(r)) for r in app.router.routes})

@app.get("/__whereami")
def whereami():
    # 현재 실행 중인 main.py의 실제 파일 경로를 확인
    import pathlib, sys
    return {
        "main_file": str(pathlib.Path(__file__).resolve()),
        "pythonpath": sys.path[:5],  # 상위 몇 개만
    }
    
@app.get("/", include_in_schema=False)
def root():
    return {"status": "ok", "see": ["/docs", "/api/health", "/api/help"]}

@app.get("/api/health")
def health():
    return {"ok": True}

@app.exception_handler(Exception)
async def _all_exc_handler(request: Request, exc: Exception):
    traceback.print_exc()
    return JSONResponse(status_code=500, content={"error": type(exc).__name__, "detail": str(exc)})

