# from rag_agent import *

# global_state = {}

# def run_agent(disease_name: str, confidence: float, memory) -> dict:
#     """
#     YOLO 결과 입력받아 그래프 실행 및 최종 처방 생성까지 수행
#     """
#     state = {
#         "disease_name": disease_name,
#         "confidence": confidence
#     }

#     state = graph.invoke(state)

#     global_state["current"] = state

#     while state.get("questions"):
#         print("\n[에이전트 질문]")
#         for i, q in enumerate(state["questions"], 1):
#             print(f" {q}")

#         # 사용자 답변 입력
#         answers = []
#         for i, q in enumerate(state["questions"], 1):
#             ans = input(f"[답변 {i}]: ")
#             answers.append(ans)

#         # 사용자 답변 처리 (Graph 바깥에서)
#         state = process_user_answers(state, answers)

#         # 최종 처방전 생성 (Graph 바깥에서 직접 호출)
#         state = generate_final_prescription(state)
#         break   # 한 번 질문 후 최종 처방 생성 → 종료

#     return state


# def process_answers(state, answers):
#     """사용자 응답 → 최종 처방 생성"""
#     state = process_user_answers(state, answers)
#     state = generate_final_prescription(state)
#     return state

from agent.rag_agent import *
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

llm = ChatOpenAI(model_name='gpt-4o-mini' ,temperature=0)
# 서버 전역 상태 (사용자별 세션 dict[userId] 구조)
user_states = {}
user_memory = {}

current_userId = None

def get_state(userId: str):
    return user_states.setdefault(userId, {})

def set_state(userId: str, state: dict):
    user_states[userId] = state

def get_user_memory(userId: str):
    """사용자별 메모리 객체 반환"""
    if userId not in user_memory:
        user_memory[userId] = ConversationBufferMemory(return_messages=True)
    return user_memory[userId]

def get_conversation_chain(userId: str):
    """사용자별 Memory를 사용하는 ConversationChain 생성"""
    memory = get_user_memory(userId)
    return ConversationChain(llm=llm, memory=memory)

def generate_prescription_user(state: dict, userId: str) -> dict:
    """userId 기반 ConversationChain을 사용하는 초기 처방 생성"""
    chain = get_conversation_chain(userId)

    prompt = f"""
    당신은 양봉 질병 전문가입니다.
    질병 {state['disease_name']} 에 대한 정보 {state['disease_info']['raw']} 를 활용해
    심각도가 {state['severity']}인 경우 최적의 처방전을 작성하세요.
    심각도가 3 이상이면 병원 정보를 포함하세요.
    
    대답 형식은 아래처럼 []를 꼭 포함하고 한 문장이 끝날때마다 줄바꿈을 해줘 처방/대처방안에서 각각 한줄씩 쓰고 공손한 말투를 유지해주면 좋겠어
    마지막 병원 정보를 쓸 땐 한국양봉농협 동물병원 031-677-6521 을 항상 포함해줘
    심각도는 1=낮음, 2=중간, 3=중~높음, 4=매우 높음으로 심각도 숫자를 매칭해 한국어로 표현해주세요
    
    안녕하세요! 응애에 대한 정보를 바탕으로 심각도를 평가하고 최적의 처방전을 작성해 보겠습니다. \n
    [✅심각도] \n
    최종 심각도: \n
    [💊처방/대처 방안] \n
    1. 진단: \n
    2. 강군 유지: \n
    3. 소비 내검 및 응애 제거: \n
    4. 화학제 사용: \n
    5. 봉군 위생 강화:  \n
    [🏥병원 정보] \n
    병원 정보: 한국양봉농협 동물병원 031-677-6521
    
    """
    response = chain.run(prompt)
    state["prescription"] = response
    return state

from agent.rag_agent import generate_final_prescription as generate_final_prescription_node

def generate_final_prescription_user(state: dict, userId: str) -> dict:
    """userId 기반 ConversationChain을 사용하는 최종 처방 생성"""
    chain = get_conversation_chain(userId)

    prompt = f"""
    당신은 양봉 질병 전문가입니다.
    사용자 응답: {"; ".join(state.get("user_answers", []))}
    질병 정보: {state['disease_info']['raw']}
    기존 심각도: {state['severity']}
    최종 심각도를 재평가하고, 처방전을 작성하세요. 심각도가 3 이상이면 병원 정보를 포함하세요.

    대답 형식은 아래처럼 []를 꼭 포함하고 한 문장이 끝날때마다 줄바꿈을 해줘 처방/대처방안에서 각각 한줄씩 쓰고 공손한 말투를 유지해주면 좋겠어 마지막 병원 정보를 쓸 땐 한국양봉농협 동물병원 031-677-6521 을 항상 포함해줘
    심각도는 1=낮음, 2=중간, 3=중~높음, 4=매우 높음으로 심각도 숫자를 매칭해 한국어로 표현해주세요

    안녕하세요! 응애에 대한 정보를 바탕으로 심각도를 평가하고 최적의 처방전을 작성해 보겠습니다. \n
    [✅심각도] \n
    최종 심각도: \n
    [💊처방/대처 방안] \n
    1. 진단: \n
    2. 강군 유지: \n
    3. 소비 내검 및 응애 제거: \n
    4. 화학제 사용: \n
    5. 봉군 위생 강화:  \n
    [🏥병원 정보] \n
    병원 정보: 한국양봉농협 동물병원 031-677-6521
    """
    response = chain.run(prompt)

    match = re.search(r"\[최종 심각도\]\s*:\s*(\d+)", response)
    final_severity = int(match.group(1)) if match else state["severity"]

    state["severity"] = final_severity
    state["prescription"] = response
    return state

def generate_question_user(state: DiseaseState, userId: str) -> DiseaseState:
    chain = get_conversation_chain(userId)
    
    prompt = f"""
    당신은 양봉 질병 전문가입니다.
    초기 진단명: {state['disease_name']}
    관련 증상: {state['disease_info']['raw']}
    초기 심각도: {state['severity']}
    위 정보를 기반으로 양봉업자에게 정확한 진단과 심각도를 알려주기 위한 추가 증상 관련 질문 3가지를 생성하세요.
    - 질문은 3개, 리스트 형태로 출력해주세요.
    - 질문 내용만 출력하세요.
    - 똑같은 질문을 반복하지 마세요.
    - 질문은 간결하게 하세요.
    - 번호나 기호(-, ., ))를 붙이지 마세요.
    """

    response = chain.run(prompt)

    questions = [q.strip("- ").strip() for q in response.split("\n") if q.strip()]

    state["questions"] = questions
    return state

# LangGraph 노드용 Wrapper
def generate_prescription_node(state: dict) -> dict:
    return generate_prescription_user(state, current_userId)

def generate_final_prescription_node(state: dict) -> dict:
    return generate_final_prescription_user(state, current_userId)

def generate_question_node(state: dict) -> dict:
    return generate_question_user(state, current_userId)

# 노드 추가 (각 단계 함수 연결)
workflow.add_node("check", check_severity)
workflow.add_node("generate_pre", generate_prescription_node)
workflow.add_node("generate_que", generate_question_node)
#workflow.add_node("process_answer", process_user_answers)
workflow.add_node("generate_finalpre", generate_final_prescription_node)

# 노드 연결 (흐름 정의)
workflow.add_edge(START, "check")
workflow.add_conditional_edges("check", route_next)
workflow.add_edge("generate_que", END)
#workflow.add_edge("process_answer", "generate_finalpre")
workflow.add_edge("generate_finalpre", END)
workflow.add_edge("generate_pre", END)

# 그래프 컴파일
graph = workflow.compile()

def run_agent(userId: str, disease_name: str, confidence: float, memory: ConversationBufferMemory) -> dict:
    """
    YOLO 결과 → 초기 진단 → 질문 또는 처방
    """
    global current_userId
    current_userId = userId
    state = {
        "disease_name": disease_name,
        "confidence": confidence
    }

    state = graph.invoke(state)
    set_state(userId, state)

    if state.get("questions"):
        return {"questions": state["questions"]}

    state = generate_final_prescription_user(state, userId)
    set_state(userId, state)
    memory.chat_memory.add_ai_message(state["prescription"])

    return {"prescription": state["prescription"], "response": state["prescription"]}


def process_user_answers_with_state(userId: str, answers: list[str], memory: ConversationBufferMemory) -> dict:
    """
    사용자 답변 기반 → 기존 상태(state) 업데이트 후 최종 처방 생성
    """
    global current_userId
    current_userId = userId

    memory.chat_memory.add_user_message("사용자 답변: " + "; ".join(answers))

    # 기존 state 불러오기
    state = get_state(userId)
    if not state:
        # state가 없으면 최소값 생성
        state = {"disease_name": "미상", "severity": 1}

    # 기존 state에 answers 반영
    state = process_user_answers(state, answers)
    state = generate_final_prescription_user(state, userId)
    set_state(userId, state)

    memory.chat_memory.add_ai_message(state["prescription"])

    return {"prescription": state["prescription"], "response": state["prescription"]}

