package forbee.infra;

import com.azure.identity.DefaultAzureCredential;
import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import com.azure.storage.blob.models.UserDelegationKey;
import com.azure.storage.blob.sas.BlobSasPermission;
import com.azure.storage.blob.sas.BlobServiceSasSignatureValues;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;

@Service
public class AzureBlobService {
    private static final Logger log = LoggerFactory.getLogger(AzureBlobService.class);
    
    private final BlobServiceClient blobServiceClient;
    private final String containerName;
    
    public AzureBlobService(
            @Value("${azure.storage.account-url}") String accountUrl,
            @Value("${azure.storage.container-name}") String containerName) {
        this.containerName = containerName;
        this.blobServiceClient = initializeBlobServiceClient(accountUrl);
        
        log.info("Azure Blob Service initialized with account: {}, container: {}", 
                accountUrl, containerName);
    }
    
    private BlobServiceClient initializeBlobServiceClient(String accountUrl) {
        try {
            DefaultAzureCredential credential = new DefaultAzureCredentialBuilder()
                    .build();
            
            BlobServiceClient client = new BlobServiceClientBuilder()
                    .endpoint(accountUrl)
                    .credential(credential)
                    .buildClient();
                    
            log.info("Azure Blob Service successfully initialized with Managed Identity");
            return client;
        } catch (Exception e) {
            log.warn("Failed to initialize Azure Blob Service with Managed Identity: {}", e.getMessage());
            log.info("This is expected in local development without Azure credentials");
            
            // 로컬 개발용: null 반환 (실제 사용시 예외 발생)
            return null;
        }
    }
    
    /**
     * 파일 업로드를 위한 User-delegation SAS 토큰 생성
     * @param fileName 업로드할 파일명
     * @return SAS 정보가 담긴 Map (uploadUrl, blobUrl)
     */
    public Map<String, String> generateSasForUpload(String fileName) {
        log.info("Generating SAS token for file: {}", fileName);
        log.info("BlobServiceClient status: {}", blobServiceClient != null ? "initialized" : "null");
        log.info("Container name: {}", containerName);
        
        if (blobServiceClient == null) {
            log.warn("BlobServiceClient is not initialized. Returning mock SAS response for local development.");
            Map<String, String> mockResponse = new HashMap<>();
            mockResponse.put("uploadUrl", "https://mock-storage.blob.core.windows.net/images/" + fileName + "?mock-sas-token");
            mockResponse.put("blobUrl", "https://mock-storage.blob.core.windows.net/images/" + fileName);
            mockResponse.put("fileName", fileName);
            log.info("Returning mock response: {}", mockResponse);
            return mockResponse;
        }
        
        try {
            // User delegation key 요청 (최대 7일, 여기서는 1시간)
            OffsetDateTime delegationKeyStart = OffsetDateTime.now();
            OffsetDateTime delegationKeyExpiry = delegationKeyStart.plusHours(1);
            
            UserDelegationKey userDelegationKey = blobServiceClient.getUserDelegationKey(
                    delegationKeyStart, delegationKeyExpiry);
            
            // Blob 클라이언트 생성
            var blobClient = blobServiceClient
                    .getBlobContainerClient(containerName)
                    .getBlobClient(fileName);
            
            // SAS 권한 설정 (Create, Write 권한만 부여)
            BlobSasPermission sasPermission = new BlobSasPermission()
                    .setCreatePermission(true)
                    .setWritePermission(true);
            
            // SAS 토큰 생성 (10분 유효)
            BlobServiceSasSignatureValues sasValues = new BlobServiceSasSignatureValues(
                    OffsetDateTime.now().plusMinutes(10), sasPermission)
                    .setContentType("image/jpeg");
            
            String sasToken = blobClient.generateUserDelegationSas(sasValues, userDelegationKey);
            
            // URL 생성
            String blobUrl = blobClient.getBlobUrl();
            String uploadUrl = blobUrl + "?" + sasToken;
            
            Map<String, String> result = new HashMap<>();
            result.put("uploadUrl", uploadUrl);  // SAS가 포함된 업로드용 URL
            result.put("blobUrl", blobUrl);      // 공개 읽기용 URL (나중에 분석 API에 전달)
            result.put("fileName", fileName);
            
            log.debug("Generated SAS token for file: {}", fileName);
            return result;
            
        } catch (Exception e) {
            log.error("Failed to generate SAS token for file: {}", fileName, e);
            throw new RuntimeException("SAS 토큰 생성 실패", e);
        }
    }
    
    /**
     * 읽기 전용 SAS URL 생성 (필요시 사용)
     * @param fileName 파일명
     * @return 읽기 전용 SAS URL
     */
    public String generateReadOnlySasUrl(String fileName) {
        if (blobServiceClient == null) {
            log.warn("BlobServiceClient is not initialized. Returning mock read-only URL for local development.");
            return "https://mock-storage.blob.core.windows.net/images/" + fileName + "?mock-readonly-sas-token";
        }
        
        try {
            OffsetDateTime delegationKeyStart = OffsetDateTime.now();
            OffsetDateTime delegationKeyExpiry = delegationKeyStart.plusHours(1);
            
            UserDelegationKey userDelegationKey = blobServiceClient.getUserDelegationKey(
                    delegationKeyStart, delegationKeyExpiry);
            
            var blobClient = blobServiceClient
                    .getBlobContainerClient(containerName)
                    .getBlobClient(fileName);
            
            BlobSasPermission sasPermission = new BlobSasPermission()
                    .setReadPermission(true);
            
            BlobServiceSasSignatureValues sasValues = new BlobServiceSasSignatureValues(
                    OffsetDateTime.now().plusHours(24), sasPermission);
            
            String sasToken = blobClient.generateUserDelegationSas(sasValues, userDelegationKey);
            
            return blobClient.getBlobUrl() + "?" + sasToken;
            
        } catch (Exception e) {
            log.error("Failed to generate read-only SAS URL for file: {}", fileName, e);
            throw new RuntimeException("읽기 전용 SAS URL 생성 실패", e);
        }
    }
}