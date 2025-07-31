// -> Front
package forbee.infra;

import forbee.domain.ImageAnalysisResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    private final SimpMessagingTemplate messagingTemplate;

    @Autowired
    public NotificationService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void sendAnalysisResultToUser(String userId, ImageAnalysisResult result) {
        // 메시지를 보낼 목적지 주소를 동적으로 생성합니다.
        // 프론트엔드는 "/topic/analysis/" + userId 주소를 구독하고 있어야 합니다.
        String destination = "/topic/analysis/" + userId;

        System.out.println("Sending analysis result to: " + destination);
        messagingTemplate.convertAndSend(destination, result);
    }
}
