import sys
from pathlib import Path
from dotenv import load_dotenv
from services.openai_client import VectorStoreClient

# chatbot_ai/.env 를 확실히 로드
load_dotenv(dotenv_path=Path(__file__).resolve().parent.parent / ".env")

USAGE = """\
사용법:
  python -m scripts.create_vector_store <파일|폴더> ...

예:
  python -m scripts.create_vector_store ./file
  python -m scripts.create_vector_store ./file ./kb/약관.pdf
"""

ALLOWED = {".pdf", ".md", ".markdown", ".txt", ".html", ".htm"}

def expand_args(args: list[str]) -> list[str]:
    paths: list[str] = []
    for a in args:
        p = Path(a)
        if p.is_dir():
            for f in p.rglob("*"):
                if f.is_file() and f.suffix.lower() in ALLOWED and not f.name.startswith("."):
                    paths.append(str(f))
        elif p.is_file():
            if p.suffix.lower() in ALLOWED:
                paths.append(str(p))
        else:
            print(f"[경고] 존재하지 않음: {a}")
    return sorted(set(paths))

def main():
    if len(sys.argv) < 2:
        print(USAGE); sys.exit(1)

    files = expand_args(sys.argv[1:])
    if not files:
        print("[오류] 업로드할 파일이 없습니다."); sys.exit(2)

    vsc = VectorStoreClient()
    store = vsc.create(name="사이트이용센터-KB")
    print(f"[정보] 생성된 VECTOR_STORE_ID: {store.id}")

    print("[정보] 파일 업로드/색인 중... (완료까지 자동 대기)")
    vsc.upload_and_poll(store.id, files)

    print("\n[완료] 파일 색인까지 완료되었습니다.")
    print("다음 명령으로 .env에 저장하세요:")
    print(f'  echo "VECTOR_STORE_ID={store.id}" >> /workspace/forbee/chatbot_ai/.env')
    print("\n그리고 서버를 재시작하세요.")
    print("  uvicorn chatbot_ai.main:app --host 0.0.0.0 --port 8002 --reload")

if __name__ == "__main__":
    main()
