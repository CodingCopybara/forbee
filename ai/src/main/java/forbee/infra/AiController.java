package forbee.infra;

import forbee.domain.Completion;
import forbee.domain.Prompt;
import forbee.service.AiApplicationService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ai")
public class AiController {

    private final AiApplicationService aiApplicationService;

    public AiController(AiApplicationService aiApplicationService) {
        this.aiApplicationService = aiApplicationService;
    }

    @PostMapping("/prompt")
    public Completion getCompletion(@RequestBody Prompt prompt) {
        return aiApplicationService.getCompletion(prompt);
    }
}
