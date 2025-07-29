package forbee.infra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ChatbotController {

    @Autowired
    private OpenAIService ai;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("/ask")
    public String ask(@RequestParam("question") String question, Model model) {
        String answer = ai.ask(question);
        model.addAttribute("question", question);
        model.addAttribute("answer", answer);
        return "index";
    }
}
