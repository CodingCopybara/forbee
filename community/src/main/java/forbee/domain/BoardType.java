package forbee.domain;

public enum BoardType {
    GENERAL, QNA, NOTICE;

    public static BoardType fromCategory(String category) {
        switch (category) {
            case "자유게시판": return GENERAL;
            case "QnA":        return QNA;
            case "공지사항":    return NOTICE;
            default:
                try {
                    return BoardType.valueOf(category.toUpperCase());
                } catch (IllegalArgumentException e) {
                    return GENERAL;
                }
        }
    }
}