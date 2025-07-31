package forbee.infra;

import forbee.domain.Completion;
import forbee.domain.FastAiService;
import forbee.domain.Prompt;
import org.springframework.stereotype.Service;

@Service
public class AiApplicationService {

    private final FastAiService fastAiService;

    public AiApplicationService(FastAiService fastAiService) {
        this.fastAiService = fastAiService;
    }

    public Completion getCompletion(Prompt prompt) {
        return fastAiService.getCompletion(prompt);
    }
}
