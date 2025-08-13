# services/openai_client.py
#!/usr/bin/env python3
import os
from dotenv import load_dotenv
from openai import OpenAI, AsyncOpenAI

ENV_PATH = "/workspace/forbee/chatbot_ai/.env"

def get_env(key: str, default=None):
    load_dotenv(ENV_PATH, override=True)
    return os.getenv(key, default)

API_KEY = get_env("OPENAI_API_KEY")
VSID    = get_env("VECTOR_STORE_ID")

if not API_KEY:
    raise RuntimeError("OPENAI_API_KEY가 .env에 없습니다.")
if not VSID:
    raise RuntimeError("VECTOR_STORE_ID가 .env에 없습니다.")

client  = OpenAI(api_key=API_KEY)
aclient = AsyncOpenAI(api_key=API_KEY)

FILE_SEARCH_RES = {"file_search": {"vector_store_ids": [VSID]}}
