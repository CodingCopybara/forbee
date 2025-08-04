package forbee.infra;

import org.springframework.http.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Component
public class FastApiClient {
    
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${fastapi.url}")
    private String FASTAPI_URL;

    public String sendDiagnoseRequest(String diseaseName, double confidence, Long userId) {
        String url = FASTAPI_URL + "/diagnose";
        Map<String, Object> request = new HashMap<>();
        request.put("disease_name", diseaseName);
        request.put("confidence", confidence);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("userId", String.valueOf(userId));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request, headers);


        try {
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
            return response.getBody();
        } catch (RestClientException e) {
            System.err.println("FastAPI 호출 실패: " + e.getMessage());
            return "{\"error\":\"FastAPI 호출 실패\"}";
        }
    }

    public String sendAnswerRequest(List<String> answers, Long userId) {
        String url = FASTAPI_URL + "/answer";
        Map<String, Object> request = new HashMap<>();
        request.put("answers", answers);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("userId", String.valueOf(userId));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(request, headers);

        try {
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
            return response.getBody();
        } catch (RestClientException e) {
            System.err.println("FastAPI /answer 호출 실패: " + e.getMessage());
            return "{\"error\":\"FastAPI answer 호출 실패\"}";
        }
    }

}
