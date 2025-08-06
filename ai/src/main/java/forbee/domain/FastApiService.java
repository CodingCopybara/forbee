package forbee.domain;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "fast-api", url = "${fastapi.url}")
public interface FastApiService {
    
    @PostMapping("/object-detection")
    void requestAnalysis(ImageAnalysisRequest request);
}
