# ─── Base Image & Prep ───────────────────────────────────────────────────────
FROM python:3.10-slim AS base
WORKDIR /app

# 타임존 설정 (Asia/Seoul)
ENV TZ=Asia/Seoul
RUN apt-get update \
 && apt-get install -y --no-install-recommends tzdata \
 && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
 && echo $TZ > /etc/timezone \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Python 버퍼링 해제
ENV PYTHONUNBUFFERED=1

# ─── Dependencies ────────────────────────────────────────────────────────────
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ─── Application Code ───────────────────────────────────────────────────────
COPY . .

# ─── Runtime ─────────────────────────────────────────────────────────────────
EXPOSE 8002

# uvicorn이 main.py 안의 FastAPI 인스턴스(app)를 실행합니다.
ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

