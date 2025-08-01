package forbee.infra;

import forbee.domain.ImageAnalysisResult;
import forbee.domain.AzureStorageService;
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
    private final AzureStorageService azureStorageService;

    public PolicyHandler(
        NotificationService notificationService,
        AzureStorageService azureStorageService
    ) {
        this.notificationService = notificationService;
        this.azureStorageService = azureStorageService;
    }

    /**
     * FastAPI에서 분석 완료 후 발행한 초기 결과 메시지를 수신합니다.
     * 이 메시지를 받아 Azure에 저장하는 역할을 합니다.
     * application.yml에서 'rawAnalysisResultIn-in-0' 바인딩이 필요합니다.
     */
    @Bean
    public Consumer<Message<ImageAnalysisResult>> rawAnalysisResultIn() {
        return message -> {
            ImageAnalysisResult result = message.getPayload();
            if (result == null) {
                log.warn(
                    "Received a null payload from Kafka for raw analysis. Skipping."
                );
                return;
            }

            log.info(
                "Received raw analysis result from Kafka: {}",
                result.toString()
            );

            // Step 4: Azure에 저장하는 로직
            String uploadedUrl = azureStorageService.uploadImage(
                result.getUserId(),
                result.getResultImageUrl()
            );
            log.info(
                "Image for user {} saved to Azure Blob Storage at URL: {}",
                result.getUserId(),
                uploadedUrl
            );
        };
    }

    /**
     * 다른 Python 서버에서 추가 처리가 완료된 후 발행한 최종 결과 메시지를 수신합니다.
     * 이 메시지를 받아 WebSocket을 통해 프론트엔드로 알림을 보냅니다.
     * application.yml에서 'finalResultIn-in-0' 바인딩이 필요합니다.
     */
    // @Bean
    // public Consumer<Message<ImageAnalysisResult>> finalResultIn() {
    //     return message -> {
    //         // 이 부분은 이전 대화에서 논의된 알림 전용 Consumer 입니다.
    //         // 현재는 NotificationService가 주석처리 되어있어 에러가 발생할 수 있습니다.
    //         // NotificationService를 활성화하거나 이 Bean을 주석처리 하세요.
    //     };
    // }
}
//>>> Clean Arch / Inbound Adaptor
