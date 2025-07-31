package forbee.infra;

import forbee.domain.FastApiService;
import forbee.domain.ImageAnalysisRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FastApiServiceImpl implements FastApiService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public void requestAnalysis(ImageAnalysisRequest request) {
        // 실제 FastAPI 서비스의 주소로 변경해야 합니다.
        String fastApiUrl = "http://localhost:8000/request-analysis"; 
        restTemplate.postForObject(fastApiUrl, request, Void.class);
    }
}
