package forbee.domain;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "ChatSave_table")
public class ChatSave {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String userId;
    private String role;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime timestamp;
}
