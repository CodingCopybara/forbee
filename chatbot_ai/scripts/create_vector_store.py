# /workspace/forbee/chatbot_ai/scripts/create_vector_store.py
#!/usr/bin/env python3
import sys
from services.openai_client import VectorStoreClient

def main():
    client = VectorStoreClient()
    vsid = client.ensure_vector_store_id()
    print(vsid)

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print("ERROR:", e, file=sys.stderr)
        sys.exit(1)
