package forbee.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import forbee.infra.FastApiClient;

@RestController
@RequestMapping("/api")
public class DiagnoseController {
    private final FastApiClient fastApiClient;

    public DiagnoseController(FastApiClient fastApiClient) {
        this.fastApiClient = fastApiClient;
    }

    // 진단 요청 DTO
    public static class DiagnoseRequest {
        public String disease_name;
        public double confidence;
        public Long userId;
        // getter/setter ...
    }

    @PostMapping("/diagnose")
    public ResponseEntity<String> handleDiagnose(
            @RequestHeader("userId") Long userId,
            @RequestBody DiagnoseRequest request) {

        
        String result = fastApiClient.sendDiagnoseRequest(request.disease_name,
            request.confidence, userId);
        return ResponseEntity.ok(result);
    }
}
