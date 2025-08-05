package forbee.infra;

import forbee.infra.AbstractEvent;
import org.springframework.stereotype.Component;

@Component
public class PolicyHandler {
    /**
     * 도메인 이벤트를 수신하여 정책 검증/처리 로직을 수행
     */
    public void handle(AbstractEvent event) {
        // TODO: 정책 처리 로직 구현
    }
}