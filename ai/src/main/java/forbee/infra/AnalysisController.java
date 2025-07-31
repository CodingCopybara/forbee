package forbee.controller;

import forbee.domain.FastApiService;
import forbee.domain.ImageAnalysisRequest;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ai")
public class AnalysisController {

    private final FastApiService fastApiService;

    public AnalysisController(FastApiService fastApiService) {
        this.fastApiService = fastApiService;
    }

    @PostMapping("/request-analysis")
    public ResponseEntity<Void> requestAnalysis(@Valid @RequestBody ImageAnalysisRequest request) {
        fastApiService.requestAnalysis(request);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
