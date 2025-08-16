// src/main/java/forbee/infra/ChatProxyController.java
package forbee.infra;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;


import java.util.Map;

@RestController
public class ChatProxyController {

    @Value("${fastapi.base:http://localhost:8002}")
    private String fastapiBase;

    private final RestTemplate rest;

    public ChatProxyController(RestTemplate rest) {
        this.rest = rest;
    }

    @PostMapping("/api/chat")
    public ResponseEntity<?> chat(@RequestBody ChatRequest body) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
    
        HttpEntity<ChatRequest> entity = new HttpEntity<>(body, headers);
    
        try {
            ResponseEntity<Map<String, Object>> response = rest.exchange(
                fastapiBase + "/api/help",
                HttpMethod.POST,
                entity,
                new ParameterizedTypeReference<>() {}
            );
            return ResponseEntity
                    .status(response.getStatusCode())
                    .body(response.getBody());
    
        } catch (HttpClientErrorException | HttpServerErrorException ex) {
            return ResponseEntity
                    .status(ex.getStatusCode())
                    .body(Map.of(
                            "error", ex.getClass().getSimpleName(),
                            "detail", ex.getResponseBodyAsString()
                    ));
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of(
                            "error", e.getClass().getSimpleName(),
                            "detail", e.getMessage()
                    ));
        }
    }
    

    @GetMapping("/api/health")
    public ResponseEntity<?> health() {
        try {
            ResponseEntity<Map<String, Object>> response = rest.exchange(
                    fastapiBase + "/api/health",
                    HttpMethod.GET,
                    null,
                    new ParameterizedTypeReference<>() {}
            );

            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(502).body(
                    Map.of("error", "UPSTREAM", "detail", e.getMessage())
            );
        }
    }

    @Data
    public static class ChatRequest {
        private String question;
    }
}
