package forbee.infra;

import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.domain.AgentResponse;
import forbee.domain.AgentResultStore;
import forbee.domain.AgentResultStream;
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

    private final AgentResultStore<AgentResponse> store;
    private final AgentResultStream<AgentResponse> stream;

    public PolicyHandler(FastApiClient fastApiClient,
                         AgentResultStore<AgentResponse> store,
                         AgentResultStream<AgentResponse> stream) {
        this.fastApiClient = fastApiClient;
        this.store = store;
        this.stream = stream;
    }

    @KafkaListener(topics = "forbee", groupId = "ai")
    public void handleDiseaseEvent(String message) {

        try {
            // 1. JSON → Map 변환
            Map<String, Object> event = objectMapper.readValue(message, Map.class);
            System.out.println("event = " + event);

            Map<String, Object> data = (Map<String, Object>) event.get("data");
            System.out.println("data = " + data);

            if (data == null) {
                System.out.println("data가 null임! 메시지 구조를 다시 확인해야 합니다.");
                return;
            }

            Object userIdObj = data.get("userId");
            String userId = (userIdObj == null) ? null : userIdObj.toString().trim();
            if (userId == null || userId.isEmpty()) {
                System.out.println("userId가 비어있습니다. 이벤트 라우팅/SSE 전달이 제한될 수 있습니다.");
            }

            // 2. 관심 질병 라벨 매핑
            Map<String, String> diseaseLabelToKor = Map.of(
                "Larva_mite", "응애",
                "Insect_mite", "응애",
                "Larva_gypsum", "석고병",
                "Larva_butterfly", "부저병",
                "insect_wing_crippled_virus_infection", "날개불구바이러스감염증"
            );
            
            // 3. detectedObjects 추출
            Object detectedObjectsObj = data.get("detectedObjects");
            System.out.println("detectedObjectsObj = " + detectedObjectsObj);

            if (detectedObjectsObj == null) {
                System.out.println("detectedObjects가 null임! 데이터 구조를 다시 확인해야 합니다.");
                return;
            }

            List<Map<String, Object>> detectedObjects = (List<Map<String, Object>>) detectedObjectsObj;


            Set<String> normalLabels = Set.of("Insect_normal", "Larva_Normal", "Insect_normal\"");
            // 4. 가장 높은 신뢰도의 질병 찾기
            String diseaseNameEn = null;
            double topConfidence = 0.0;
            boolean foundDisease = false;

            for (Map<String, Object> obj : detectedObjects) {
                String label = obj.get("label").toString();
                double confidence = Double.parseDouble(obj.get("confidence").toString());
                
                // 질병만 찾는다 (정상 벌이면 무시)
                if (diseaseLabelToKor.containsKey(label)) {
                    foundDisease = true;
                    if (confidence > topConfidence) {
                        diseaseNameEn = label;
                        topConfidence = confidence;
                    }
                }
            }

            if (!foundDisease) {
                System.out.println("[Kafka Event] userId=" + userId + " 정상 벌입니다. 감지된 질병 없음.");
                try {
                    Map<String, Object> payload = new HashMap<>();
                    payload.put("diseaseName", "정상");
                    payload.put("risk", 0.0);
                    payload.put("prescription",
                        "분석 결과, 유의할 만한 해충/질병이 보이지 않습니다. 😊\n" +
                        "- 벌집 위생과 환기를 유지하고 주 1~2회 정기 관찰을 이어가세요.\n" +
                        "- 더 선명한 근접 사진으로 재분석하면 정확도가 높아집니다."
                    );
                    String json = objectMapper.writeValueAsString(payload);
                    AgentResponse res = objectMapper.readValue(json, AgentResponse.class);
                    if (userId != null && !userId.isBlank()) {
                        store.put(userId, res);
                        stream.emit(userId, res);
                    } else {
                        System.out.println("userId가 없어 SSE 전달을 생략합니다.");
                    }
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
                return;
            } else {
                String diseaseNameKor = diseaseLabelToKor.get(diseaseNameEn);

                System.out.println("[Kafka Event] userId=" + userId + " 질병/해충 탐지됨: " + diseaseNameKor + " (" + topConfidence + ")");

                // 6. FastAPI 호출
                String result = fastApiClient.sendDiagnoseRequest(diseaseNameKor, topConfidence, userId);
                System.out.println("FastAPI 응답: " + result);

                if (userId != null && result != null) {
                AgentResponse res = objectMapper.readValue(result, AgentResponse.class);
                store.put(userId, res);
                stream.emit(userId, res); 
                }
            }



        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
//>>> Clean Arch / Inbound Adaptor