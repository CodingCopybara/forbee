# /workspace/forbee/chatbot_ai/scripts/setup_vector_store.py
#!/usr/bin/env python3
import math, sys
from services.openai_client import VectorStoreClient
from services.tools import gather_files

DEFAULT_DIR = "/workspace/forbee/chatbot_ai/file"
BATCH_SIZE = 8  # 메모리/네트워크 상황에 따라 조절

def main():
    target_dir = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_DIR
    client = VectorStoreClient()
    vsid = client.ensure_vector_store_id()

    files = gather_files(target_dir)
    if not files:
        print(f"[INFO] 업로드할 파일이 없습니다. (디렉터리: {target_dir})")
        return

    total = len(files)
    print(f"[INFO] 업로드 대상 파일 {total}개 (디렉터리: {target_dir})")
    width = int(math.log10(total)) + 1 if total > 0 else 1

    for i in range(0, total, BATCH_SIZE):
        batch = files[i:i+BATCH_SIZE]
        print(f"[UPLOAD] {i+1:>{width}}–{min(i+BATCH_SIZE, total):>{width}} / {total}개 ...")
        res = client.upload_paths(vsid, batch)
        status = getattr(res, "status", None) or getattr(res, "state", None)
        print(f"        상태: {status}")

    listing = client.list_files(vsid)
    if listing is not None:
        items = getattr(listing, "data", [])
        print(f"[DONE] 스토어({vsid})에 등록된 파일 수: {len(items)}")
        for it in items:
            fid = getattr(it, "id", "")
            name = getattr(it, "filename", "") or getattr(it, "display_name", "")
            print(f" - {fid}  {name}")
    else:
        print(f"[DONE] 업로드 완료. VECTOR_STORE_ID={vsid}")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print("ERROR:", e, file=sys.stderr)
        sys.exit(1)
