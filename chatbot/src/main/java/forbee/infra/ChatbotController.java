package forbee.infra;

import java.util.Date;
import java.util.List;    // ← 여기에 추가
import java.util.Map;     // Map도 쓴다면
import forbee.chat.dto.ChatResponse;
import forbee.domain.Chatbot;
import forbee.domain.Comment;
import forbee.domain.ChatbotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;


@RestController
@RequestMapping("/chatbots")
public class ChatbotController {

    private final ChatbotRepository chatbotRepository;
    private final WebClient chatClient;

    @Autowired
    public ChatbotController(
        ChatbotRepository chatbotRepository,
        @Qualifier("chatClient") WebClient chatClient
    ) {
        this.chatbotRepository = chatbotRepository;
        this.chatClient = chatClient;
    }

    @PostMapping("/ask")
    public Chatbot ask(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");

        // Python 마이크로서비스 호출
        ChatResponse chatResp = chatClient.post()
            .uri("/chat")
            .bodyValue(Map.of("question", question))
            .retrieve()
            .bodyToMono(ChatResponse.class)
            .block();

        String answer = chatResp.getAnswer();

        // 엔티티에 저장
        Chatbot chatbot = new Chatbot();
        chatbot.setRequestTime(new Date());
        chatbot.setRequest(new Comment(question, new Date()));
        chatbot.setResponse(new Comment(answer, new Date()));
        return chatbotRepository.save(chatbot);
    }

    @GetMapping
    public List<Chatbot> listAll() {
        return chatbotRepository.findAll();
    }
}
