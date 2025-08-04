package forbee.infra;

// Kafka → WebSocket 브리지 - 현재 사용하지 않으므로 비활성화
// 필요시 다시 활성화 가능

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
