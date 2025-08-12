import pandas as pd
import numpy as np
import os
import ast
import random
import openai
import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)

from typing import Annotated, Literal, Sequence, TypedDict

from langchain import hub
from langchain_core.messages import BaseMessage, HumanMessage
from langchain_core.output_parsers import StrOutputParser, CommaSeparatedListOutputParser
from langchain_core.prompts import PromptTemplate, ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langgraph.graph import StateGraph, START, END
from typing import TypedDict, List, Dict, Optional
import random
import ast
from langchain.chains import LLMChain
import re
from dotenv import load_dotenv
import pandas as pd
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from pathlib import Path
from langchain.docstore.document import Document

# openAI key
def load_api_keys(env_path=Path(__file__).parent / ".env"):
    """
        env_path (str): .env 파일의 경로 (기본값: 현재 폴더의 .env)
    """
    if os.path.exists(env_path):
        load_dotenv(dotenv_path=env_path)
        print(f"[INFO] .env 파일 로드 완료: {env_path}")
    else:
        print(f"[WARN] .env 파일을 찾을 수 없습니다: {env_path}")

load_api_keys()
openai_key = os.getenv("OPENAI_API_KEY")

# state 선언
class DiseaseInfo(TypedDict):
    severity: int
    description: str
    treatment: str
    raw: str

class DiseaseState(TypedDict, total=False):
    # 고정 정보 (YOLO 정보)
    disease_name: str
    confidence: float # double

    # 업데이트
    severity: Optional[int]          # 1, 2, 3, 4
    user_answers: Optional[List[str]]
    questions: Optional[List[str]]
    #conversation: Optional[List[Dict[str, str]]]  # {"role": "user/agent", "content": "..."}
    prescription: Optional[str]
    disease_info: Optional[DiseaseInfo]
    next_step: Optional[str]         # "check_severity", "generate_questions" 등

# RAG
# csv -> vector DB
# CSV 로드
# df = pd.read_csv("/workspace/forbee/ai/agent/bee_disease_with_severity.csv")
df = pd.read_csv(Path(__file__).parent / "bee_disease_with_severity.csv")

# Document 리스트 생성 (RAG 검색용)
docs = []
for _, row in df.iterrows():
    text = f"""
    질병명: {row['disease_name']}
    설명: {row['description']}
    치료법: {row['treatment']}
    심각도: {row['severity']}"""
    docs.append(Document(page_content=text, metadata={"disease_name": row['disease_name']}))

# 벡터 임베딩 생성
embeddings = OpenAIEmbeddings()
vector_db = Chroma.from_documents(docs, embedding=embeddings, persist_directory="bee_disease_chroma_db")

# 로컬에 저장 (나중에 load 가능)
vector_db.persist()

# 저장된 chroma db 로드, retriever 생성
from langchain.vectorstores import Chroma

# 저장된 DB 로드
vector_db = Chroma(persist_directory="bee_disease_chroma_db", embedding_function=embeddings)

# Retriever 생성
retriever = vector_db.as_retriever(search_type="similarity", search_kwargs={"k": 1})

# 심각도 기반 분기 로직
def parse_disease_content(content: str) -> dict:
    """검색된 RAG content에서 심각도, 설명, 치료법을 추출하여 dict 반환"""
    match = re.search(r"심각도\s*:\s*(\d+)", content)
    severity = int(match.group(1)) if match else 0

    match_desc = re.search(r"설명\s*:\s*(.+)", content)
    description = match_desc.group(1).strip() if match_desc else "설명 없음"

    match_treat = re.search(r"치료법\s*:\s*(.+)", content)
    treatment = match_treat.group(1).strip() if match_treat else "치료 정보 없음"

    return {
        "severity": severity,
        "description": description,
        "treatment": treatment,
        "raw": content
    }


def get_disease_info(disease_name: str) -> dict:
    """
    1) metadata(disease_name)로 정확 검색
    2) 없으면 retriever(벡터 검색) fallback
    3) dict 형태로 반환
    """
    # 1) metadata 기반 정확 검색
    try:
        meta = vector_db._collection.get(where={"disease_name": disease_name})
    except AttributeError:
        meta = {"documents": []}  # 안전 처리

    if meta["documents"]:
        content = meta["documents"][0]
        return parse_disease_content(content)

    # 2) fallback: 기존 retriever 검색
    query = f"{disease_name}에 대한 정보(심각도, 설명, 치료법)를 알려줘"
    results = retriever.get_relevant_documents(query)

    if not results:
        return {
            "severity": 0,
            "description": "정보 없음",
            "treatment": "정보 없음",
            "raw": ""
        }

    content = results[0].page_content
    return parse_disease_content(content)

def check_severity(state: "DiseaseState") -> "Disease":
    """
    RAG에서 질병 정보(기본 심각도)를 가져와 confidence와 함께 최종 심각도 결정.
    """
    disease = state.get("disease_name")
    confidence = state.get("confidence", 0.0)

    # 1. RAG/KB에서 질병 정보 조회
    disease_info = get_disease_info(disease)
    severity = disease_info["severity"]

    # 2. confidence 값으로 보정
    if confidence < 0.6:
        severity = 0
    elif confidence > 0.8 and severity >= 3:
        severity = 4

    # # 3. 다음 단계 설정 -> route_next에서 결정
    # next_step = "hospital_recommend" if severity >= 3 else "generate_questions"

    # 4. 상태 업데이트
    state["severity"] = severity
    state["disease_info"] = disease_info
    #state["next_step"] = next_step

    return state

# 심각도 >= 3: 바로 처방전+병원호출
def generate_prescription(state: "DiseaseState") -> "DiseaseState":
    """
    질병명 기반, RAG로 처방전 생성 -> 병원 연결 정보 제공
    """
    #chain = get_conversation_chain(userId)
    
    disease = state["disease_name"]
    disease_info = state["disease_info"]["raw"]
    severity = state["severity"]

    prescription_prompt = PromptTemplate(
        input_variables=["disease", "answers", "disease_info"],
        template="""
        당신은 양봉 질병 전문가입니다.
        질병 {disease} 에 대한 지식베이스 정보 {disease_info} 를 활용해 최적의 처방전을 작성하세요.
        심각도가 3 이상일 때만 병원 정보를 출력하세요.
        심각도가 3 미만일 때는 병원 정보를 출력하지 마세요.

        출력 형식:
        [심각도]: {severity}
        [처방전]
        - 질병 설명
        - 권장 조치
        - 추가 관리 팁
        - 병원 정보: 한국양봉농협 동물병원 031-677-6521에 연락하는걸 권장드립니다. 전문가의 소견이 필요합니다.
        """
    )

    #response = chain.run(prescription_prompt)

    state["prescription"] = response

    return state

# 심각도 <= 2: 추가 정보 얻기 위해 질문
def generate_question(state: DiseaseState, userId: str) -> DiseaseState:
    chain = get_conversation_chain(userId)
    
    disease_info = state["disease_info"]["raw"]
    disease_name = state["disease_name"]
    severity = state["severity"]

    prompt = PromptTemplate(
    template="""
        당신은 양봉 질병 전문가입니다.
        아래 정보를 기반으로 양봉업자에게 정확한 진단과 심각도를 알려주기 위한 추가 증상 관련 질문 3가지를 생성하세요.
        초기 진단명: {disease_name}
        관련 증상: {disease_info}
        초기 심각도: {severity}
        조건:
        - 질문은 3개, 리스트 형태로 출력해주세요.
        - 질문 내용만 출력하세요.
        - 똑같은 질문을 반복하지 마세요.
        - 질문은 간결하게 하세요.
        """
    )

    response = chain.run(prompt)

    questions = [q.strip("- ").strip() for q in response.split("\n") if q.strip()]

    state["questions"] = questions
    return state

# 사용자 답변 저장 후 최종 처방전 생성
def process_user_answers(state: "DiseaseState", answers: list[str]) -> "DiseaseState":
    """
    사용자가 질문에 대한 답변을 입력했을 때 state에 저장하고,
    심각도 재판단 후 다음 단계로 전환.
    """
    state["user_answers"] = answers

    #memory.chat_memory.add_user_message("답변: " + "; ".join(answers))

    return state

def generate_final_prescription(state: "DiseaseState") -> "DiseaseState":
    """
    질병명 + 사용자 응답 기반으로 최종 처방전 생성 -> 심각도 재판단 후 병원 연결 정보 제공
    """
    #chain = get_conversation_chain(userId)

    disease = state["disease_name"]
    severity = state["severity"]
    answers = "; ".join(state.get("user_answers", []))
    disease_info = state["disease_info"]["raw"]

    prescription_prompt = PromptTemplate(
        input_variables=["disease", "answers", "disease_info", "severity"],
        template="""
        당신은 양봉 질병 전문가입니다.
        질병 {disease} 에 대한 사용자 상태 {answers} 를 참고하여
        지식베이스 정보 {disease_info} 를 활용해 최적의 처방전을 작성하세요.
        또한 기존 초기 심각도 {severity}는 1: 낮음, 2: 중간, 3: 중~높음,4: 매우 높음의 의미를 가지고 있습니다.
        사용자의 상태 {answers}와 정보 {disease_info}를 참고해 심각도를 재평가해주세요.
        재평가한 심각도가 3 이상이라면 병원 정보를 출력해주세요.
        심각도가 3 이상일 때만 병원 정보를 출력하세요.
        심각도가 3 미만일 때는 병원 정보를 출력하지 마세요.


        출력 형식:
        [최종 심각도]: (0~4)
        [처방전]
        - 질병 설명
        - 권장 조치
        - 추가 관리 팁
        - (필요 시) 병원 정보: 한국양봉농협 동물병원 031-677-6521에 연락하는걸 권장드립니다. 전문가의 소견이 필요합니다.
        """
    )

    #response = chain.run(prescription_prompt)

    match = re.search(r"\[최종 심각도\]\s*:\s*(\d+)", response)
    final_severity = int(match.group(1)) if match else severity

    state["severity"] = final_severity
    state["prescription"] = response

    return state

# 하나로 묶기
# 분기 판단 함수
def route_next(state: DiseaseState) -> Literal["generate_que", "generate_pre"]:
    """
    상태(state)의 severity 기반으로 다음 노드를 결정.
    - severity >= 3 → 바로 최종 처방/병원 권고 단계 ("generate_finalpre")
    - severity < 3 → 추가 질문 단계 ("generate_que")
    - next_step 값이 이미 명시되어 있으면 그대로 사용
    """
    severity = state.get("severity", 0)

    if severity > 2:
        state["next_step"] = "generate_pre"
    else:
        state["next_step"] = "generate_que"

    return state["next_step"]

workflow = StateGraph(DiseaseState)