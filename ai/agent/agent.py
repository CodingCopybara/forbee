from rag_agent import *

def run_agent(state):
    """
    YOLO 결과 입력받아 그래프 실행 및 최종 처방 생성까지 수행
    """
    state = graph.invoke(state)

    while state.get("questions"):
        print("\n[에이전트 질문]")
        for i, q in (state["questions"], 1):
            print(f" {q}")

        # 사용자 답변 입력
        answers = []
        for i, q in enumerate(state["questions"], 1):
            ans = input(f"[답변 {i}]: ")
            answers.append(ans)

        # 사용자 답변 처리 (Graph 바깥에서)
        state = process_user_answers(state, answers)

        # 최종 처방전 생성 (Graph 바깥에서 직접 호출)
        state = generate_final_prescription(state)
        break   # 한 번 질문 후 최종 처방 생성 → 종료

    # 심각도 ≥3이면 병원 안내, 최종 처방 출력
    print("\n[최종 처방 결과]")
    print(state.get("prescription", "처방전이 생성되지 않았습니다."))


def process_answers(state, answers):
    """사용자 응답 → 최종 처방 생성"""
    state = process_user_answers(state, answers)
    state = generate_final_prescription(state)
    return state
