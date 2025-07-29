package forbee.infra;

import com.theokanning.openai.service.OpenAiService;
import com.theokanning.openai.completion.chat.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OpenAIService {
    private final OpenAiService client;

    public OpenAIService(@Value("${OPENAI_API_KEY}") String apiKey) {
        this.client = new OpenAiService(apiKey);
    }

    public String ask(String prompt) {
        ChatCompletionRequest req = ChatCompletionRequest.builder()
            .model("gpt-3.5-turbo")
            .messages(List.of(
                new ChatMessage("system", "당신은 양봉 전문가입니다. 초보자도 이해하기 쉽게 설명해 주세요."),
                new ChatMessage("user", prompt)))
            .maxTokens(700)
            .temperature(0.7)
            .build();

        ChatCompletionResult result = client.createChatCompletion(req);
        return result.getChoices().get(0).getMessage().getContent().trim();
    }
}
