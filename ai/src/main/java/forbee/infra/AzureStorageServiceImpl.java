package forbee.infra;

import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import com.azure.identity.DefaultAzureCredential;
import com.azure.identity.DefaultAzureCredentialBuilder;
import forbee.domain.AzureStorageService;
import java.nio.file.Paths;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AzureStorageServiceImpl implements AzureStorageService {

    private static final Logger log = LoggerFactory.getLogger(
        AzureStorageServiceImpl.class
    );
    private final BlobContainerClient containerClient;

    public AzureStorageServiceImpl(
        @Value("${azure.storage.endpoint}") String endpoint,
        @Value("${azure.storage.container-name}") String containerName
    ) {
        DefaultAzureCredential credential = new DefaultAzureCredentialBuilder().build();

        BlobServiceClient blobServiceClient = new BlobServiceClientBuilder()
            .endpoint(endpoint)
            .credential(credential)
            .buildClient();
        this.containerClient =
            blobServiceClient.getBlobContainerClient(containerName);

        // 애플리케이션 시작 시 컨테이너가 없으면 생성
        if (!containerClient.exists()) {
            containerClient.create();
            log.info("Blob container '{}' created.", containerName);
        }
    }

    @Override
    public String uploadImage(String userId, String imagePath) {
        try {
            String blobName = userId + "/" + UUID.randomUUID().toString() + "-" + Paths.get(imagePath).getFileName().toString();
            BlobClient blobClient = containerClient.getBlobClient(blobName);

            log.info("Uploading file '{}' to Azure Blob Storage as blob '{}'", imagePath, blobName);
            blobClient.uploadFromFile(imagePath, true); // true: 덮어쓰기 허용

            return blobClient.getBlobUrl();
        } catch (Exception e) {
            log.error("Failed to upload file '{}' for user '{}' to Azure Blob Storage", imagePath, userId, e);
            return null;
        }
    }
}
