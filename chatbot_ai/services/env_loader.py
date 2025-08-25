# services/env_loader.py
import os
from dotenv import load_dotenv

ENV_PATH = "/workspace/forbee/chatbot_ai/.env"

def get_env(key: str, default=None):
    load_dotenv(ENV_PATH, override=True)  # 매번 덮어쓰기 로드
    return os.getenv(key, default)
