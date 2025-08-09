package forbee.controller;

import forbee.infra.FastApiClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AnswerController {
    
    private final FastApiClient fastApiClient;

    public AnswerController(FastApiClient fastApiClient) {
        this.fastApiClient = fastApiClient;
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

    // 프론트엔드에서 사용자 답변 전송
    @PostMapping("/answer")
    public ResponseEntity<String> handleUserAnswer(
            @RequestHeader("userId") Long userId,
            @RequestBody AnswerRequest request) {

        List<String> answers = request.getAnswers();
        System.out.println("사용자 입력 수신 userId=" + userId + ", answers=" + answers);

        // FastAPI /answer 호출
        String result = fastApiClient.sendAnswerRequest(answers, userId);

        System.out.println("FastAPI 응답: " + result);
        return ResponseEntity.ok(result);
    }
}
