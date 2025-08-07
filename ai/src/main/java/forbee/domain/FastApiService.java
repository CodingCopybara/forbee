package forbee.domain;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "python-ai", url = "${python-ai.url}")
public interface FastApiService {

    @PostMapping("/object-detection")
    void requestAnalysis(ImageAnalysisRequest request);
}
