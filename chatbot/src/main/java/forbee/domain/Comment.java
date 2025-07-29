package forbee.domain;

import javax.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Chatbot의 요청(request)과 응답(response)을 감싸는 값 객체
 */
@Embeddable
@Data
@NoArgsConstructor
public class Comment {
    /**
     * 실제 대화 내용
     */
    private String content;

    // 필요시 여기에 타임스탬프나 메타데이터 필드를 추가할 수 있습니다.
}
