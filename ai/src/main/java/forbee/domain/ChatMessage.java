package forbee.domain;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "chat_message", indexes = {
        @Index(name = "idx_chat_message_session", columnList = "session_id"),
        @Index(name = "idx_chat_message_session_ts", columnList = "session_id, ts")
})
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class ChatMessage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // FK만 보유(간단한 구조). 연관관계 매핑은 생략
    @Column(name = "session_id", nullable = false)
    private Long sessionId;

    @Column(name = "sender", nullable = false, length = 16) // user | bot
    private String sender;

    @Column(name = "type", nullable = false, length = 16)   // text | image
    private String type;

    @Column(name = "text", columnDefinition = "TEXT")
    private String text;

    @Column(name = "url", length = 1000)
    private String url;

    // 클라이언트에서 온 메시지 시각(ms). 정렬용
    @Column(name = "ts", nullable = false)
    private Long ts;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
