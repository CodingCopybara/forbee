package forbee.infra;

import forbee.domain.ImageAnalysisResult;
import forbee.domain.AzureStorageService;
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
            notificationService.sendAnalysisResultToUser(result.getUserId(), result);
        };
    }
}
//>>> Clean Arch / Inbound Adaptor
