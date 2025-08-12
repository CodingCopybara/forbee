package forbee.domain;

import lombok.Getter;
import java.util.List;

@Getter
public class SaveChatRequest {
    private String userId;
    private List<Msg> messages;

    public SaveChatRequest() {}
    public SaveChatRequest(String userId, List<Msg> messages) {
        this.userId = userId; this.messages = messages;
    }

    public String getUserId() { return userId; }
    public List<Msg> getMessages() { return messages; }

    public static class Msg {
        private String sender;
        private String type;
        private String text;
        private String url;
        private Long ts;

        public Msg() {}
        public Msg(String sender, String type, String text, String url, Long ts) {
            this.sender = sender; this.type = type; this.text = text; this.url = url; this.ts = ts;
        }
        public String getSender() { return sender; }
        public String getType() { return type; }
        public String getText() { return text; }
        public String getUrl() { return url; }
        public Long getTs() { return ts; }
    }
}
