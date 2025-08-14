package forbee.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chat_saves")
public class ChatSave {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 로그인 사용자 정보 (게스트면 저장 자체를 안함)
    private String userId;      // 토큰에 있으면
    private String username;    // 토큰에 있으면
    private String role;        // 토큰에 있으면

    @Lob
    private String question;

    @Lob
    private String answer;

    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        if (createdAt == null) createdAt = LocalDateTime.now();
    }

    // --- getter/setter ---
    public Long getId() { return id; }
    public String getUserId() { return userId; }
    public String getUsername() { return username; }
    public String getRole() { return role; }
    public String getQuestion() { return question; }
    public String getAnswer() { return answer; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setId(Long id) { this.id = id; }
    public void setUserId(String userId) { this.userId = userId; }
    public void setUsername(String username) { this.username = username; }
    public void setRole(String role) { this.role = role; }
    public void setQuestion(String question) { this.question = question; }
    public void setAnswer(String answer) { this.answer = answer; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
