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

    /**
     * 특정 사용자에게 이미지 분석 결과를 전송합니다.
     * @param userId 결과를 수신할 사용자의 ID
     * @param result 전송할 분석 결과 데이터
     */
    public void sendAnalysisResultToUser(String userId, ImageAnalysisResult result) {
        if (userId == null || userId.trim().isEmpty()) {
            System.out.println("User ID is missing. Cannot send notification.");
            return;
        }

        // 메시지를 보낼 목적지 주소를 동적으로 생성합니다.
        // 프론트엔드는 "/topic/analysis/" + userId 주소를 구독하고 있어야 합니다.
        String destination = "/topic/analysis/" + userId;

        System.out.println("Sending analysis result to: " + destination);
        messagingTemplate.convertAndSend(destination, result);
    }
}
