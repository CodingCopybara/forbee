// src/main/java/forbee/infra/AzureBlobService.java
package forbee.infra;

import com.azure.storage.blob.*;
import com.azure.storage.blob.sas.*;
import com.azure.storage.common.StorageSharedKeyCredential;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.HashMap;
import java.util.Map;

@Service
public class AzureBlobService {

    private final String accountName;
    private final String accountKey;
    private final String containerName;
    private final boolean publicContainer;
    private final int uploadExpireMinutes;
    private final int readExpireHours;

    private final BlobServiceClient blobServiceClient;

    public AzureBlobService(
            @Value("${azure.storage.account-name}") String accountName,
            @Value("${azure.storage.account-key}") String accountKey,
            @Value("${azure.storage.container}") String containerName,
            @Value("${azure.storage.public-container:true}") boolean publicContainer,
            @Value("${azure.storage.sas.upload-expire-minutes:15}") int uploadExpireMinutes,
            @Value("${azure.storage.sas.read-expire-hours:12}") int readExpireHours
    ) {
        this.accountName = accountName;
        this.accountKey = accountKey;
        this.containerName = containerName;
        this.publicContainer = publicContainer;
        this.uploadExpireMinutes = uploadExpireMinutes;
        this.readExpireHours = readExpireHours;

        StorageSharedKeyCredential credential = new StorageSharedKeyCredential(accountName, accountKey);
        String endpoint = "https://" + accountName + ".blob.core.windows.net";
        this.blobServiceClient = new BlobServiceClientBuilder()
                .endpoint(endpoint)
                .credential(credential)
                .buildClient();
    }

    /** 업로드용 SAS 발급 (create/write/read) */
    public Map<String, String> generateSasForUpload(String uniqueFileName) {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
        BlobClient blobClient = containerClient.getBlobClient(uniqueFileName);

        OffsetDateTime startsOn = OffsetDateTime.now(ZoneOffset.UTC).minusMinutes(5);
        OffsetDateTime expiresOn = OffsetDateTime.now(ZoneOffset.UTC).plusMinutes(uploadExpireMinutes);

        BlobSasPermission perm = new BlobSasPermission()
                .setCreatePermission(true)
                .setWritePermission(true)
                .setAddPermission(true)
                .setReadPermission(true);

        BlobServiceSasSignatureValues values = new BlobServiceSasSignatureValues(expiresOn, perm)
                .setStartTime(startsOn)
                .setProtocol(SasProtocol.HTTPS_ONLY)
                .setContainerName(containerName)
                .setBlobName(uniqueFileName);

        String sas = blobClient.generateSas(values);

        String encodedName = URLEncoder.encode(uniqueFileName, StandardCharsets.UTF_8);
        String baseUrl = "https://" + accountName + ".blob.core.windows.net/" + containerName + "/" + encodedName;

        Map<String, String> res = new HashMap<>();
        res.put("uploadUrl", baseUrl + "?" + sas);   // PUT 대상
        res.put("blobUrl", baseUrl);                 // 공개 컨테이너면 표시용으로 바로 사용 가능
        res.put("fileName", uniqueFileName);
        res.put("publicContainer", Boolean.toString(publicContainer));
        return res;
    }

    /** 읽기 전용 SAS (비공개 컨테이너에서 표시용 URL) */
    public String generateReadOnlySasUrl(String uniqueFileName) {
        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
        BlobClient blobClient = containerClient.getBlobClient(uniqueFileName);

        OffsetDateTime startsOn = OffsetDateTime.now(ZoneOffset.UTC).minusMinutes(5);
        OffsetDateTime expiresOn = OffsetDateTime.now(ZoneOffset.UTC).plusHours(readExpireHours);

        BlobSasPermission perm = new BlobSasPermission().setReadPermission(true);

        BlobServiceSasSignatureValues values = new BlobServiceSasSignatureValues(expiresOn, perm)
                .setStartTime(startsOn)
                .setProtocol(SasProtocol.HTTPS_ONLY)
                .setContainerName(containerName)
                .setBlobName(uniqueFileName);

        String sas = blobClient.generateSas(values);

        String encodedName = URLEncoder.encode(uniqueFileName, StandardCharsets.UTF_8);
        return "https://" + accountName + ".blob.core.windows.net/" + containerName + "/" + encodedName + "?" + sas;
    }
}
