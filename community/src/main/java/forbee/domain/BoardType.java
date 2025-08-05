package forbee.domain;

public enum BoardType {
    NOTICE,
    QNA,
    GENERAL;

    public static BoardType fromCategory(String category) {
        try {
            return BoardType.valueOf(category.toUpperCase());
        } catch (IllegalArgumentException e) {
            return GENERAL; // fallback
        }
    }
}
