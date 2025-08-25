package forbee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {
    @Bean("chatClient")
    public WebClient chatClient() {
        return WebClient.builder()
            .baseUrl("http://localhost:8000")  // Python FastAPI 서비스 주소
            .build();
    }
}