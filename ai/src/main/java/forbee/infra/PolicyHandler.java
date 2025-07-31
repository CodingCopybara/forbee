package forbee.infra;

import forbee.domain.ImageAnalysisResult;
import java.util.function.Consumer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;

//<<< Clean Arch / Inbound Adaptor
@Configuration
public class PolicyHandler {

    private static final Logger log = LoggerFactory.getLogger(PolicyHandler.class);
    private final NotificationService notificationService;

    public PolicyHandler(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @Bean
    public Consumer<Message<ImageAnalysisResult>> eventIn() {
        return message -> {
            ImageAnalysisResult result = message.getPayload();
            if (result == null) {
                log.warn("Received a null payload from Kafka. Skipping.");
                return;
            }

            log.info("Received analysis result from Kafka: {}", result.toString());

            notificationService.sendAnalysisResultToUser(result.getUserId(), result);
        };
    }
}
//>>> Clean Arch / Inbound Adaptor
