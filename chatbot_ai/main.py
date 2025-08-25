import os, json, asyncio, traceback, re
from datetime import datetime
from dotenv import load_dotenv
from fastapi import FastAPI, Request, Query
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

    "우선순위:",
    "1) 지식문서(File Search)에 관련 내용이 있으면 반드시 그것을 바탕으로 답변한다.",
    "2) 문서에 관련 항목이 없거나 불충분해도 그 사실을 드러내지 말고, 일반적인 지식을 바탕으로 곧바로 간결하게 답변한다.",
    "3) 관련 링크가 있다면 '허니몰 바로가기', '금융상품 바로가기' 같은 앵커 텍스트로 제공한다.",
    "4) 그래도 불확실하면 필요한 추가 정보를 정중히 요청한다.",

    "출력 규칙:",
    "1) 질문에 직접 해당하는 조항/정보만 답변하며, 군더더기 서두 없이 바로 핵심만 말한다.",
    "2) 답변은 반드시 간결하게 요약하고, 불릿(•) 최대 3개 또는 번호 목록 최대 3개만 사용한다.",
    "3) 약관/공지/이용방법 질문은 관련 조항을 요약하고 마지막 줄에 [출처: 문서명/버전]을 표기한다. (문서를 근거로 하지 않은 일반 지식 답변에는 출처 줄을 생략한다.)",
    "4) PDF 파일명, 확장자 등 사용자가 보기 불편한 표기는 제거하고, 출처 표기는 간단하게 정리한다.",
    "5) 링크는 open_link 도구를 통해 화이트리스트 URL만 제공하며, 반드시 앵커 텍스트로 표시한다.",

    "금지 사항:",
    "1) '첨부된 문서에는 ~ 포함되어 있지 않습니다', '문서에 해당 내용이 없습니다', '자료가 없습니다'와 같은 문구를 절대 사용하지 않는다.",
    "2) 파일/검색/도구 사용 여부, 내부 로직, 시스템 한계를 노출하지 않는다.",
    "3) 불필요한 장황한 설명이나 수다 금지.",

    "대화 스타일:",
    "1) 항상 존댓말을 사용한다.",
    "2) 간결하고 명료하게 답변한다."
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
    patterns = [
        r"업로드.*문서.*(포함|확인).{0,20}않습니다",
        r"자료.*제공.*확인.*드리겠습니다",
        r"죄송하지만.*(문서|정보).*포함.*않습니다",
        r"현재.*문서.*내용.*없습니다",
        r"불확실.*추가정보.*요청",
    ]
    lines = raw_answer.splitlines()
    cleaned_lines = []
    for line in lines:
        if not any(re.search(p, line, re.IGNORECASE) for p in patterns):
            cleaned_lines.append(line.strip())
    cleaned = "\n".join([l for l in cleaned_lines if l]).strip()
    return cleaned or "현재 정확한 정보를 찾지 못했어요. 다른 질문을 해보시겠어요?"

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
    return "\n\n".join(parts) if parts else "[WARN] 빈 응답 (OpenAI 응답 없음)"

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

# --- /chatbot/help ---
@app.post("/chatbot/help", response_model=ChatResponse)
async def help_api(req: ChatRequest):
    messages = [{"role": "system", "content": HELP_SYSTEM}, {"role": "user", "content": req.question}]
    raw_answer = await asyncio.to_thread(run_help_center_sync, messages)
    print("🧪 raw_answer:", repr(raw_answer)) 
    answer = clean_ai_answer(raw_answer)

    # URL 추천
    url = provide_recommendation_url(req.question)
    if url:
        answer += f"\n\n🔗 관련 상품/정보: {url}"

    return ChatResponse(answer=answer)

# --- /chatbot/help/stream ---
@app.post("/chatbot/help/stream")
async def help_stream(req: ChatRequest, request: Request):
    session_history = request.session.setdefault("history", [])
    session_history.append({"role": "user", "content": req.question})
    messages = _build_messages(session_history[:-1], req.question)

    async def gen():
        collected = ""
        async for chunk in stream_help_center(messages):
            collected += chunk
            yield chunk
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
    return {"status": "ok", "see": ["/docs", "/chatbot/health", "/chatbot/help"]}

@app.get("/chatbot/health")
async def health():
    return {"status": "ok"}

@app.exception_handler(Exception)
async def _all_exc_handler(request: Request, exc: Exception):
    traceback.print_exc()
    return JSONResponse(status_code=500, content={"error": type(exc).__name__, "detail": str(exc)})

@app.post("/chatbot/chat", response_model=ChatResponse)
async def chat_api(req: ChatRequest):
    return await help_api(req)
