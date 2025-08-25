package forbee.domain;

public class SaveChatResponse {
    private Long sessionId;

    public SaveChatResponse() {}
    public SaveChatResponse(Long sessionId) { this.sessionId = sessionId; }

    public Long getSessionId() { return sessionId; }
    public void setSessionId(Long sessionId) { this.sessionId = sessionId; }
}
