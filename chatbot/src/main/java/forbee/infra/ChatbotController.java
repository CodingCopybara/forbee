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


@RestController @RequestMapping("/chatbots")
public class ChatbotController {
  private final ChatbotRepository repo;
  private final WebClient chatClient;

  public ChatbotController(ChatbotRepository repo,
                           @Qualifier("chatClient") WebClient client){
    this.repo = repo; this.chatClient = client;
  }

  @PostMapping("/ask")
  public Chatbot ask(@RequestBody Map<String,String> payload){
    String q = payload.get("question");

    // 1) Python FastAPI 호출
    ChatResponse resp = chatClient.post().uri("/chat")
      .bodyValue(Map.of("question",q))
      .retrieve()
      .bodyToMono(ChatResponse.class)
      .block();

    // 2) 엔티티에 조립·저장
    Chatbot cb = new Chatbot();
    cb.setRequestTime(new Date());
    cb.setRequest(new Comment(q,new Date()));
    cb.setResponse(new Comment(resp.getAnswer(),new Date()));
    return repo.save(cb);
  }
}
