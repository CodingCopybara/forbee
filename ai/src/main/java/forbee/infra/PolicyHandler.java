package forbee.infra;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.config.kafka.KafkaProcessor;
import forbee.domain.*;
import forbee.infra.NotificationService;  // 추가
import javax.naming.NameParser;
import javax.naming.NameParser;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

//<<< Clean Arch / Inbound Adaptor
@Service
@Transactional
public class PolicyHandler {

    @Autowired
    Repository Repository;

    private final NotificationService notificationService;

    @Autowired
    public PolicyHandler(NotificationService notificationService) {
        this.notificationService = notificationService
    }

    // @StreamListener(KafkaProcessor.INPUT)
    // public void whatever(@Payload String eventString) {}

    @StreamListener(KafkaProcessor.INPUT)
    public void wheneverAnalysisCompleted_handle(@Payload ImageAnalysisResult analysisResult) {
        if (analysisResult != null && analysisResult.getDetectedObjects() != null) {
            System.out.println("Received Analysis Result via Kafka: " + analysisResult.toString());
            // analysisResult.getDetectedObjects().forEach(object -> {
            //     System.out.println("Detected object label: " + object.getLabel());
            // });
            notificationService.sendAnalysisResultToUser(
                analysisResult.getUserId(),  // 유저 ID
                analysisResult
            );
        }
    }
}
//>>> Clean Arch / Inbound Adaptor
