package forbee.controller;

import forbee.infra.FastApiClient;
import forbee.domain.AgentResponse;
import forbee.domain.AgentResultStore;
import forbee.domain.AgentResultStream;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api")
public class AnswerController {

    private final FastApiClient fastApiClient;
    private final AgentResultStore<AgentResponse> store;
    private final AgentResultStream<AgentResponse> stream;
    private final ObjectMapper om = new ObjectMapper();

    public AnswerController(FastApiClient fastApiClient,
                            AgentResultStore<AgentResponse> store,
                            AgentResultStream<AgentResponse> stream) {
        this.fastApiClient = fastApiClient;
        this.store = store;
        this.stream = stream;
    }
    
    // Request DTO
    public static class AnswerRequest {
        private List<String> answers;

        public List<String> getAnswers() {
            return answers;
        }

        public void setAnswers(List<String> answers) {
            this.answers = answers;
        }
    }

@PostMapping("/answer")
public ResponseEntity<String> handleUserAnswer(
        @RequestHeader("userId") Long userId,
        @RequestBody AnswerRequest request) {

        List<String> answers = request.getAnswers();
        String result = fastApiClient.sendAnswerRequest(answers, userId);

        // 결과를 DTO로 변환해 저장/푸시 (프론트에서 즉시 보이게)
        try {
            AgentResponse res = om.readValue(result, AgentResponse.class);
            //String uid = String.valueOf(userId);
            store.put(userId, res);
            stream.emit(userId, res); 
        } catch (Exception ignore) {}

        return ResponseEntity.ok(result);
    }

}