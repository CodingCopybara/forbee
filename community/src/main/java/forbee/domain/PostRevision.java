package forbee.domain;

import lombok.*;
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class PostRevision {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long postId;                // 원글 ID (FK 대체용 간단 ref)
    private String titleBefore;         // 수정 전 제목
    @Lob
    private String contentBefore;       // 수정 전 본문(HTML/MD)
    @Lob
    private String attachmentsJson;     // 수정 전 첨부(JSON 문자열; 필요 시)
    private String editedBy;            // 수정 실행한 사용자
    private LocalDateTime editedAt;     // 수정 시각
}
