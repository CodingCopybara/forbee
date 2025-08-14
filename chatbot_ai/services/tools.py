# /workspace/forbee/chatbot_ai/services/tools.py
#!/usr/bin/env python3
import os
from urllib.parse import urlparse

def is_allowed_url(url: str) -> bool:
    allowed = {os.getenv("LINK_BANK"), os.getenv("LINK_HONEYMALL")}
    allowed = {a for a in allowed if a}
    try:
        u = urlparse(url)
        if not (u.scheme and u.netloc):
            return False
        origin = f"{u.scheme}://{u.netloc}"
        return origin in allowed
    except Exception:
        return False

def run_open_link(args: dict):
    """Responses의 function tool(open_link) 실행기."""
    target = (args or {}).get("target")
    mp = {
        "bank": os.getenv("LINK_BANK"),
        "honeymall": os.getenv("LINK_HONEYMALL"),
    }
    url = mp.get(target)
    if not url:
        return {"ok": False, "reason": "unknown_target"}
    if not is_allowed_url(url):
        return {"ok": False, "reason": "blocked"}
    return {"ok": True, "url": url}
