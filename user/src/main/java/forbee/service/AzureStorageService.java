package forbee.service;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
public class AzureStorageService {

    private static final Logger logger = LoggerFactory.getLogger(AzureStorageService.class);

    @Value("${azure.storage.connection-string}")
    private String connectionString;

    @Value("${azure.storage.container-name}")
    private String containerName;

    public String uploadFile(MultipartFile file) throws IOException {
        String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
        logger.info("Azure Blob Storage에 파일 업로드 시작. 컨테이너: {}, 파일명: {}", containerName, fileName);

        BlobServiceClient blobServiceClient = new BlobServiceClientBuilder()
                .connectionString(connectionString)
                .buildClient();
        logger.info("BlobServiceClient 생성 완료");

        BlobClient blobClient = blobServiceClient.getBlobContainerClient(containerName)
                .getBlobClient(fileName);
        logger.info("BlobClient 생성 완료. URL: {}", blobClient.getBlobUrl());

        blobClient.upload(file.getInputStream(), file.getSize(), true);
        logger.info("파일 업로드 성공.");

        return blobClient.getBlobUrl();
    }
}