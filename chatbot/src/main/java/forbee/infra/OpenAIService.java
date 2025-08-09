package forbee.infra;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class OpenAIService {

    @Value("${openai.api-key}")
    private String apiKey;

    private final OkHttpClient client = new OkHttpClient();
    private final ObjectMapper mapper = new ObjectMapper();

    public String ask(String question) throws IOException {
        MediaType JSON = MediaType.get("application/json; charset=utf-8");
        String payload = mapper.writeValueAsString(
            Map.of(
                "model", "gpt-3.5-turbo",
                "messages", List.of(
                    Map.of("role","system","content","당신은 양봉 전문가입니다."),
                    Map.of("role","user","content",question)
                )
            )
        );
        RequestBody body = RequestBody.create(payload, JSON);
        Request req = new Request.Builder()
            .url("https://api.openai.com/v1/chat/completions")
            .header("Authorization","Bearer " + apiKey)
            .post(body)
            .build();

        try (Response resp = client.newCall(req).execute()) {
            JsonNode root = mapper.readTree(resp.body().string());
            return root.path("choices").get(0).path("message").path("content").asText();
        }
    }
}