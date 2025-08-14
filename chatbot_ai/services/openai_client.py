# /workspace/forbee/chatbot_ai/services/openai_client.py
import os
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI, AsyncOpenAI

# ── .env 로딩: chatbot_ai/.env 를 최우선으로 ─────────────────────────
ROOT_ENV = Path(__file__).resolve().parents[1] / ".env"   # ../.env (chatbot_ai/.env)
LOCAL_ENV = Path(__file__).with_name(".env")              # services/.env (예비)
for p in (ROOT_ENV, LOCAL_ENV, Path.cwd() / ".env"):
    if p.exists():
        load_dotenv(dotenv_path=p)
        break
else:
    # 그래도 못 찾으면 기본 로직(환경변수)만 사용
    load_dotenv()  # 무해

# ── OpenAI 클라이언트 ────────────────────────────────────────────────
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    # 마지막 방어: Gitpod의 환경변수에 없다면 명확히 안내
    raise RuntimeError("OPENAI_API_KEY 가 설정되지 않았습니다. chatbot_ai/.env 또는 gp env set 로 등록하세요.")

client = OpenAI(api_key=api_key)
aclient = AsyncOpenAI(api_key=api_key)

# ── File Search 리소스 (없어도 서비스는 동작) ─────────────────────────
VECTOR_STORE_ID = (os.getenv("VECTOR_STORE_ID") or "").strip()
FILE_SEARCH_RES = {"file_search": {"vector_store_ids": [VECTOR_STORE_ID]}} if VECTOR_STORE_ID else None

# ── (스크립트용) 벡터 스토어 유틸 ────────────────────────────────────
class VectorStoreClient:
    def __init__(self):
        self.client = client

    def create(self, name: str = "사이트이용센터-KB"):
        return self.client.vector_stores.create(name=name)

    def upload_and_poll(self, vector_store_id: str, file_paths: list[str]):
        files = [open(p, "rb") for p in file_paths]
        try:
            self.client.vector_stores.file_batches.upload_and_poll(
                vector_store_id=vector_store_id,
                files=files
            )
        finally:
            for f in files:
                try: f.close()
                except Exception: pass
