package forbee.controller;

import forbee.domain.FastApiService;
import forbee.domain.ImageAnalysisRequest;
import forbee.infra.AzureBlobService;
import javax.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/ai")
public class AnalysisController {

    private static final Logger log = LoggerFactory.getLogger(AnalysisController.class);
    
    private final FastApiService fastApiService;
    private final AzureBlobService azureBlobService;

    public AnalysisController(FastApiService fastApiService, AzureBlobService azureBlobService) {
        this.fastApiService = fastApiService;
        this.azureBlobService = azureBlobService;
    }

    @PostMapping("/request-analysis")
    public ResponseEntity<Void> requestAnalysis(@Valid @RequestBody ImageAnalysisRequest request) {
        fastApiService.requestAnalysis(request);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @GetMapping("/blob-sas")
    public ResponseEntity<Map<String, String>> getBlobSasToken(@RequestParam String fileName) {
        log.info("SAS token request received for file: {}", fileName);
        try {
            // UUID를 포함한 고유한 파일명 생성
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            log.info("Generated unique file name: {}", uniqueFileName);
            
            Map<String, String> sasInfo = azureBlobService.generateSasForUpload(uniqueFileName);
            log.info("SAS token generated successfully for file: {}", uniqueFileName);
            return ResponseEntity.ok(sasInfo);
        } catch (Exception e) {
            log.error("Failed to generate SAS token for file: {}. Error: {}", fileName, e.getMessage(), e);
            
            // 개발 환경에서는 더 상세한 오류 정보 반환
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "SAS token generation failed");
            errorResponse.put("message", e.getMessage());
            errorResponse.put("type", e.getClass().getSimpleName());
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
}
