package forbee.domain;

import javax.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "chat_session", indexes = {
        @Index(name = "idx_chat_session_user", columnList = "user_id"),
        @Index(name = "idx_chat_session_created", columnList = "created_at")
})
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class ChatSession {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false, length = 128)
    private String userId;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
