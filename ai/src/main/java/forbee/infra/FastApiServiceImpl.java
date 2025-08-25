package forbee.infra;

import forbee.domain.FastApiService;
import forbee.domain.ImageAnalysisRequest;
import java.time.Duration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;


@Service
public class FastApiServiceImpl implements FastApiService {
    private static final Logger log = LoggerFactory.getLogger(
        FastApiServiceImpl.class
    );

    private final RestTemplate restTemplate;
    private final String baseUrl;

    public FastApiServiceImpl(
            @Value("${fastapi.url}") String fastApiUrl,
            RestTemplateBuilder builder) {
        this.baseUrl = fastApiUrl;
        this.restTemplate = builder
                .setConnectTimeout(Duration.ofSeconds(5))
                .setReadTimeout(Duration.ofSeconds(30))
                .rootUri(fastApiUrl)
                .build();
    }

    @Override
    public void requestAnalysis(ImageAnalysisRequest request) {
        try {
            System.out.println("요청 시도...");
            System.out.println(request.getImageUrl());
            ResponseEntity<Void> response = restTemplate.postForEntity(
                    "/object-detection",
                    request,
                    Void.class);
            if (!response.getStatusCode().is2xxSuccessful()) {
                log.error("FastAPI returned non-2xx for user {}: {}",
                        request.getUserId(), response.getStatusCode());
            }
        } catch (RestClientException ex) {
            log.error("Failed to request analysis from FastAPI for user {}. Reason: {}",
                    request.getUserId(), ex.getMessage());
        }
    }
}
