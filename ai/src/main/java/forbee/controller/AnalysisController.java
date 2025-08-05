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
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;
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
    public Mono<ResponseEntity<Map<String, String>>> getBlobSasToken(@RequestParam String fileName) {
        log.info("SAS token request received for file: {}", fileName);
        
        return Mono.fromCallable(() -> {
            // UUID를 포함한 고유한 파일명 생성
            String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
            log.info("Generated unique file name: {}", uniqueFileName);
            
            Map<String, String> sasInfo = azureBlobService.generateSasForUpload(uniqueFileName);
            log.info("SAS token generated successfully for file: {}", uniqueFileName);
            
            // Mock 환경인지 확인하여 프론트엔드에 정보 제공
            String uploadUrl = sasInfo.get("uploadUrl");
            if (uploadUrl != null && uploadUrl.contains("mock-storage")) {
                sasInfo.put("mode", "mock");
                log.info("Mock mode SAS response returned");
            } else {
                sasInfo.put("mode", "azure");
                log.info("Real Azure SAS response returned");
            }
            
            return ResponseEntity.ok(sasInfo);
        })
        .subscribeOn(Schedulers.boundedElastic()) // blocking 작업을 별도 스레드에서 실행
        .onErrorResume(IllegalArgumentException.class, e -> {
            log.warn("Invalid request for SAS token: {}", e.getMessage());
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Invalid request");
            errorResponse.put("message", e.getMessage());
            return Mono.just(ResponseEntity.badRequest().body(errorResponse));
        })
        .onErrorResume(Exception.class, e -> {
            log.error("Failed to generate SAS token for file: {}. Error: {}", fileName, e.getMessage(), e);
            
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "SAS token generation failed");
            errorResponse.put("message", e.getMessage());
            errorResponse.put("type", e.getClass().getSimpleName());
            errorResponse.put("details", "Azure Storage 설정을 확인하거나 로컬 개발 환경에서는 Mock 모드가 사용됩니다.");
            
            return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse));
        });
    }

    @GetMapping("/blob-read-sas")
    public Mono<ResponseEntity<Map<String, String>>> getReadOnlySasUrl(@RequestParam String fileName) {
        log.info("Read-only SAS URL request received for file: {}", fileName);
        
        return Mono.fromCallable(() -> {
            String readOnlySasUrl = azureBlobService.generateReadOnlySasUrl(fileName);
            log.info("Read-only SAS URL generated successfully for file: {}", fileName);
            
            Map<String, String> response = new HashMap<>();
            response.put("readOnlyUrl", readOnlySasUrl);
            response.put("fileName", fileName);
            
            return ResponseEntity.ok(response);
        })
        .subscribeOn(Schedulers.boundedElastic()) // blocking 작업을 별도 스레드에서 실행
        .onErrorResume(Exception.class, e -> {
            log.error("Failed to generate read-only SAS URL for file: {}. Error: {}", fileName, e.getMessage(), e);
            
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Read-only SAS URL generation failed");
            errorResponse.put("message", e.getMessage());
            
            return Mono.just(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse));
        });
    }
}
