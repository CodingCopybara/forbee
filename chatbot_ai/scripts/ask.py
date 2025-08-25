#!/usr/bin/env python3
import os, sys
from dotenv import load_dotenv
from openai import OpenAI

ENV_PATH = "/workspace/forbee/chatbot_ai/.env"

def main():
    question = " ".join(sys.argv[1:]) or \
        "업로드된 문서에서 개인정보 보관·파기 기준만 간단 요약하고, 근거 문서명을 덧붙여줘."

    load_dotenv(ENV_PATH)
    api_key = os.getenv("OPENAI_API_KEY")
    vsid = os.getenv("VECTOR_STORE_ID")
    if not api_key or not vsid:
        raise SystemExit("ERROR: .env의 OPENAI_API_KEY / VECTOR_STORE_ID를 확인하세요.")

    client = OpenAI(api_key=api_key)

    guard = (
        "제공된 파일의 내용만 근거로 답하세요. "
        "문서에서 확인되지 않으면 '문서에서 확인 불가'라고 답하세요. "
        "마지막 줄에 (근거: 파일명) 형태로 표기하세요."
    )

    # 1) 어시스턴트 생성 (file_search + 우리의 벡터 스토어 연결)
    assistant = client.beta.assistants.create(
        name="FileSearch QA",
        model="gpt-4.1-mini",
        instructions=guard,
        tools=[{"type": "file_search"}],
        tool_resources={"file_search": {"vector_store_ids": [vsid]}},
    )

    # 2) 스레드에 질문 추가
    thread = client.beta.threads.create(
        messages=[{"role": "user", "content": question}]
    )

    # 3) 실행하고 완료까지 대기
    run = client.beta.threads.runs.create_and_poll(
        thread_id=thread.id,
        assistant_id=assistant.id,
    )
    if run.status != "completed":
        print(f"[WARN] Run status: {run.status}")
        return

    # 4) 최신 응답 출력
    msgs = client.beta.threads.messages.list(thread_id=thread.id, order="desc", limit=1)
    if not msgs.data:
        print("[WARN] 응답 메시지가 없습니다.")
        return

    m = msgs.data[0]
    out = []
    for c in m.content:
        if c.type == "text" and hasattr(c, "text") and hasattr(c.text, "value"):
            out.append(c.text.value)
    print("\n\n".join(out))

if __name__ == "__main__":
    main()
