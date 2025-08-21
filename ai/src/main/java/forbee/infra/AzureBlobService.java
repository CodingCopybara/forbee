package forbee.infra;

import com.azure.identity.DefaultAzureCredential;
import com.azure.identity.DefaultAzureCredentialBuilder;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
// import com.azure.storage.blob.models.UserDelegationKey;
import com.azure.storage.blob.sas.BlobSasPermission;
import com.azure.storage.blob.sas.BlobServiceSasSignatureValues;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;

import com.azure.storage.common.StorageSharedKeyCredential;  // 추가

@Service
public class AzureBlobService {
    private static final Logger log = LoggerFactory.getLogger(AzureBlobService.class);
    
    private final BlobServiceClient blobServiceClient;
    private final String containerName;
    
    public AzureBlobService(
        //     @Value("${azure.storage.account-url}") String accountUrl,
        //     @Value("${azure.storage.container-name}") String containerName) {
//         this.containerName = containerName;

//         // DefaultAzureCredential 체인을 그대로 사용하면
//         // 1) 로컬 az login & Azure CLI
//         // 2) AKS IMDS(Managed Identity)
//         // 순으로 자동 적용됩니다.
//         DefaultAzureCredential credential = new DefaultAzureCredentialBuilder().build();
        
//         this.blobServiceClient = new BlobServiceClientBuilder()
//                 .endpoint(accountUrl)
//                 .credential(credential)
//                 .buildClient();
                
//         log.info("Azure Blob Service initialized with account: {}, container: {}", accountUrl, containerName);
//     }
            @Value("${azure.storage.account-name}") String accountName,
            @Value("${azure.storage.account-key}") String accountKey,
            @Value("${azure.storage.container-name}") String containerName) {
        this.containerName = containerName;

        String endpoint = String.format("https://forbee.blob.core.windows.net", accountName);
        StorageSharedKeyCredential credential = new StorageSharedKeyCredential(accountName, accountKey);
        
        this.blobServiceClient = new BlobServiceClientBuilder()
                .endpoint(endpoint)
                .credential(credential)
                .buildClient();
                
        log.info("Azure Blob Service initialized with account: {}, container: {}", accountName, containerName);
    }
    /**
     * 파일 업로드를 위한 User-delegation SAS 토큰 생성
     * @param fileName 업로드할 파일명
     * @return SAS 정보가 담긴 Map (uploadUrl, blobUrl)
     */
    public Map<String, String> generateSasForUpload(String fileName) {
        log.info("Generating SAS token for file: {}", fileName);
        
        // User delegation key 요청 (최대 7일, 여기서는 1시간)
        // OffsetDateTime delegationKeyStart = OffsetDateTime.now();
        // OffsetDateTime delegationKeyExpiry = delegationKeyStart.plusHours(1);
        
        // UserDelegationKey userDelegationKey = blobServiceClient.getUserDelegationKey(
        //         delegationKeyStart, delegationKeyExpiry);
        
        // Blob 클라이언트 생성
        var blobClient = blobServiceClient
                .getBlobContainerClient(containerName)
                .getBlobClient(fileName);
        
        // SAS 권한 설정 (Create, Write 권한만 부여)
        BlobSasPermission sasPermission = new BlobSasPermission()
                .setCreatePermission(true)
                .setWritePermission(true)
                .setAddPermission(true);
        
        // SAS 토큰 생성 (10분 유효)
        BlobServiceSasSignatureValues sasValues = new BlobServiceSasSignatureValues(
                OffsetDateTime.now().plusMinutes(10), sasPermission)
                .setContentType("image/jpeg");
        
        // String sasToken = blobClient.generateUserDelegationSas(sasValues, userDelegationKey);
        String sasToken = blobClient.generateSas(sasValues); 
        
        // URL 생성
        String blobUrl = blobClient.getBlobUrl();
        String uploadUrl = blobUrl + "?" + sasToken;
        
        Map<String, String> result = new HashMap<>();
        result.put("uploadUrl", uploadUrl);  // SAS가 포함된 업로드용 URL
        result.put("blobUrl", blobUrl);      // 공개 읽기용 URL (나중에 분석 API에 전달)
        result.put("fileName", fileName);
        
        log.debug("Generated SAS token for file: {}", fileName);
        return result;
    }
    /**
     * 읽기 전용 SAS URL 생성
     * @param fileName 파일명
     * @return 읽기 전용 SAS URL
     */
    public String generateReadOnlySasUrl(String fileName) {
        // OffsetDateTime delegationKeyStart = OffsetDateTime.now();
        // OffsetDateTime delegationKeyExpiry = delegationKeyStart.plusHours(1);
        
        // UserDelegationKey userDelegationKey = blobServiceClient.getUserDelegationKey(
        //         delegationKeyStart, delegationKeyExpiry);
        
        var blobClient = blobServiceClient
                .getBlobContainerClient(containerName)
                .getBlobClient(fileName);
        
        BlobSasPermission sasPermission = new BlobSasPermission()
                .setReadPermission(true);
        
        BlobServiceSasSignatureValues sasValues = new BlobServiceSasSignatureValues(
                OffsetDateTime.now().plusHours(24), sasPermission);
        
        // String sasToken = blobClient.generateUserDelegationSas(sasValues, userDelegationKey);
        String sasToken = blobClient.generateSas(sasValues);
        
        return blobClient.getBlobUrl() + "?" + sasToken;
    }
}