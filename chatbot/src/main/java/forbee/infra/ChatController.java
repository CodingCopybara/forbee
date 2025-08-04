package forbee.infra;

import forbee.domain.Chatbot;
import forbee.domain.ChatbotRepository;
import forbee.domain.Comment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@Controller
public class ChatController {

    private final OpenAIService openAI;
    private final ChatbotRepository repo;

    public ChatController(OpenAIService openAI, ChatbotRepository repo) {
        this.openAI = openAI;
        this.repo = repo;
    }

    @GetMapping("/")
    public String chatPage(Model model) {
        model.addAttribute("chatHistory", repo.findAll());
        return "chat";
    }

    @PostMapping("/chat")
    public String ask(@RequestParam String question, Model model) throws Exception {
        String answer = openAI.ask(question);

        Chatbot c = new Chatbot();
        c.setRequestTime(new Date());
        c.setRequest(new Comment(question));
        c.setResponse(new Comment(answer));
        repo.save(c);

        model.addAttribute("chatHistory", repo.findAll());
        return "chat";
    }
}