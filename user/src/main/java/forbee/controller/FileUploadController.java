package forbee.controller;

import forbee.service.AzureStorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;

@RestController
@RequestMapping("/files")
public class FileUploadController {

    private static final Logger logger = LoggerFactory.getLogger(FileUploadController.class);

    @Autowired
    private AzureStorageService azureStorageService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        logger.info("'/files/upload' 요청 수신. 파일명: {}, 사이즈: {}", file.getOriginalFilename(), file.getSize());

        if (file.isEmpty()) {
            logger.warn("업로드 요청 파일이 비어있습니다.");
            return new ResponseEntity<>("Please select a file to upload.", HttpStatus.BAD_REQUEST);
        }

        try {
            logger.info("AzureStorageService 호출 시작...");
            String fileUrl = azureStorageService.uploadFile(file);
            logger.info("AzureStorageService 호출 완료. 반환된 URL: {}", fileUrl);
            
            return ResponseEntity.ok(Collections.singletonMap("url", fileUrl));

        } catch (IOException e) {
            logger.error("파일 업로드 중 IOException 발생", e);
            return new ResponseEntity<>("Failed to upload file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            logger.error("파일 업로드 중 알 수 없는 에러 발생", e);
            return new ResponseEntity<>("An unexpected error occurred during file upload.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}