package forbee.infra;

// 임시 비활성화 - Kafka 의존성 제거로 인해 전체 클래스 주석 처리
/*
import forbee.domain.ImageAnalysisResult;
import java.util.function.Consumer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;

//<<< Clean Arch / Inbound Adaptor
@Configuration
public class PolicyHandler {

    private final NotificationService notificationService;

    public PolicyHandler(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @Bean
    public Consumer<Message<ImageAnalysisResult>> rawAnalysisResultIn() {
        return message -> {
            ImageAnalysisResult result = message.getPayload();
            if (result == null) {
                return;
            }
            notificationService.sendAnalysisResultToUser(result.userId(), result);
        };
    }
}
//>>> Clean Arch / Inbound Adaptor
*/
