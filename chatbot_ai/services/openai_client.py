from services.env_loader import get_env
from openai import OpenAI, AsyncOpenAI

API_KEY = get_env("OPENAI_API_KEY")
VSID    = get_env("VECTOR_STORE_ID")

if not API_KEY:
    raise RuntimeError("OPENAI_API_KEY가 .env에 없습니다.")
if not VSID:
    raise RuntimeError("VECTOR_STORE_ID가 .env에 없습니다.")

client  = OpenAI(api_key=API_KEY)
aclient = AsyncOpenAI(api_key=API_KEY)

FILE_SEARCH_RES = {"file_search": {"vector_store_ids": [VSID]}}
