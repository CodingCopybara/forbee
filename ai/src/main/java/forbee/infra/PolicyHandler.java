package forbee.infra;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.kafka.annotation.KafkaListener;
import javax.transaction.Transactional;
import org.springframework.stereotype.Service;
import java.util.*;

//<<< Clean Arch / Inbound Adaptor
@Service
@Transactional
public class PolicyHandler {

    private final FastApiClient fastApiClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public PolicyHandler(FastApiClient fastApiClient) {
        this.fastApiClient = fastApiClient;
    }

    @KafkaListener(topics = "forbee", groupId = "ai")
    public void handleDiseaseEvent(String message) {

        try {
            // 메시지를 JSON → Map 변환
            Map<String, Object> event = objectMapper.readValue(message, Map.class);

            // 이벤트에서 diseaseName, confidence, userId 추출
            Object userIdObj = event.get("userId");
            Long userId = null;
            if (userIdObj instanceof Integer) {
                userId = ((Integer) userIdObj).longValue();
            } else if (userIdObj instanceof Long) {
                userId = (Long) userIdObj;
            } else if (userIdObj != null) {
                userId = Long.valueOf(userIdObj.toString());
            }
            //Long userId = (Long) event.get("userId");
            String diseaseName = (String) event.get("diseaseName");
            double confidence = Double.parseDouble(event.get("confidence").toString());

            System.out.println("[Kafka Event] userId=" + userId + "질병/해충 탐지됨: " + diseaseName + " (" + confidence + ")");

            // FastAPI 호출
            String result = fastApiClient.sendDiagnoseRequest(diseaseName, confidence, userId);
            System.out.println("FastAPI 응답: " + result);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
//>>> Clean Arch / Inbound Adaptor
