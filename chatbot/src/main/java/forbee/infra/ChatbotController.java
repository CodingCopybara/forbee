package forbee.infra;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;

import forbee.chat.dto.ChatResponse;
import forbee.domain.Chatbot;
import forbee.domain.Comment;
import forbee.domain.ChatbotRepository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/chatbots")
public class ChatbotController {

    private final ChatbotRepository repo;
    private final WebClient chatClient;

    public ChatbotController(ChatbotRepository repo,
                             @Qualifier("chatClient") WebClient client) {
        this.repo = repo;
        this.chatClient = client;
    }

    @PostMapping("/ask")
    public Chatbot ask(@RequestBody Map<String, String> payload) {
        String q = payload.get("question");
        String userId = payload.get("userId");

        // 🐝 1) Python FastAPI의 스트리밍 응답 받기
        Flux<String> stream = chatClient.post()
                .uri("/chat/stream")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(Map.of("question", q))
                .accept(MediaType.TEXT_PLAIN)
                .retrieve()
                .bodyToFlux(String.class);

        // 🐝 2) Flux -> String 변환
        String fullAnswer = stream
                .collect(Collectors.joining())
                .block();

        // 🐝 3) 저장
        Chatbot cb = new Chatbot();
        cb.setUserId(userId);
        cb.setRequestTime(new Date());
        cb.setRequest(new Comment(q, new Date()));
        cb.setResponse(new Comment(fullAnswer, new Date()));
        return repo.save(cb);
    }
}
