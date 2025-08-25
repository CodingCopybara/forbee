# /workspace/forbee/chatbot_ai/scripts/upload_to_vector_store.py
#!/usr/bin/env python3
import os
import sys
from services.openai_client import client, VSID

USAGE = """\
사용법:
  python -m scripts.upload_to_vector_store <파일경로> [다른파일경로 ...]
예:
  python -m scripts.upload_to_vector_store file/개인정보처리방침.pdf file/이용약관.pdf
"""

def main():
    if len(sys.argv) < 2:
        print(USAGE, file=sys.stderr)
        sys.exit(2)

    paths = sys.argv[1:]

    # 파일 경로 확인
    for p in paths:
        if not os.path.exists(p):
            print(f"ERROR: 파일을 찾을 수 없습니다 -> {p}", file=sys.stderr)
            sys.exit(2)

    # 파일 업로드
    for p in paths:
        try:
            with open(p, "rb") as f:
                uploaded_file = client.files.create(
                    file=f,
                    purpose="assistants"
                )

            client.vector_stores.files.create(
                vector_store_id=VSID,
                file_id=uploaded_file.id
            )

            print(f"✅ 업로드 완료: {p}")

        except Exception as e:
            print(f"❌ 업로드 실패: {p} -> {e}", file=sys.stderr)
            sys.exit(1)

    # 최종 파일 목록 출력
    for item in listing.data:
        try:
            file_info = client.files.retrieve(item.id)
            file_name = file_info.filename  # 원본 파일명
        except Exception as e:
            file_name = f"<이름 조회 실패: {e}>"
        print(f" - {item.id}  {file_name}")

if __name__ == "__main__":
    main()
