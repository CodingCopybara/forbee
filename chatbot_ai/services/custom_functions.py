def provide_recommendation_url(question: str) -> tuple[str, str] | None:
    """질문 내용에 따라 특정 URL과 링크 텍스트를 추천"""
    q = question.lower()

    bank_keywords = ["돈", "결제", "송금", "대출", "금리", "수수료", "계좌", "이체", "금액"]
    honey_keywords = ["선물", "효능", "꿀", "벌", "면역", "건강", "비타민", "맛"]

    if any(k in q for k in bank_keywords):
        return ("https://yangbongnh.com/html/money.html")
    elif any(k in q for k in honey_keywords):
        return ("https://yangbongnh.com/category/%EC%A0%84%EC%B2%B4%EB%B3%B4%EA%B8%B0/29/")
    else:
        return None
