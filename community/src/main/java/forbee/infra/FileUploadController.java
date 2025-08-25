// /workspace/forbee/community/src/main/java/forbee/infra/FileUploadController.java
package forbee.infra;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.nio.file.*;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping("/files")
public class FileUploadController {

    // application.yml의 spring.app.upload.base-dir 과 일치시킴
    @Value("${spring.app.upload.base-dir:uploads}")
    private String baseDir;

    private Path root;

    @PostConstruct
    public void init() throws IOException {
        this.root = Paths.get(baseDir).toAbsolutePath().normalize();
        Files.createDirectories(root);
    }

    @PostMapping(
        path = "/upload",
        consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE
    )
    public Map<String, String> upload(
        @RequestPart("file") MultipartFile file,
        @RequestParam(value = "type", required = false, defaultValue = "file") String type
    ) throws IOException {

        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("빈 파일은 업로드할 수 없습니다.");
        }

        type = normalizeType(type);

        String contentType = Optional.ofNullable(file.getContentType()).orElse("");
        if (!isAllowed(contentType, type)) {
            throw new IllegalArgumentException("허용되지 않은 파일 형식입니다.");
        }

        String originalName = Optional.ofNullable(file.getOriginalFilename()).orElse("file");
        String ext = getSafeExt(originalName, contentType, type);

        LocalDate today = LocalDate.now();
        String y = String.valueOf(today.getYear());
        String m = String.format("%02d", today.getMonthValue());

        Path dir = root.resolve(type).resolve(y).resolve(m);
        Files.createDirectories(dir);

        String savedName = UUID.randomUUID().toString().replace("-", "") + ext;
        Path target = dir.resolve(savedName);

        Files.copy(file.getInputStream(), target, StandardCopyOption.REPLACE_EXISTING);

        // 게이트웨이 경유를 위해 절대 URL 대신 경로만 반환 (/files/** 는 정적 매핑과 동일해야 함)
        String urlPath = "/files/" + type + "/" + y + "/" + m + "/" + savedName;

        Map<String, String> resp = new HashMap<>();
        resp.put("url", urlPath);
        return resp;
    }

    private String normalizeType(String t) {
        String v = Optional.ofNullable(t).orElse("file").toLowerCase(Locale.ROOT);
        if (v.startsWith("img")) return "image";
        if (v.equals("pdf")) return "pdf";
        if (v.equals("image")) return "image";
        return "file";
    }

    private boolean isAllowed(String contentType, String type) {
        if ("image".equals(type)) {
            return ("image/png".equals(contentType) || "image/jpeg".equals(contentType));
        }
        if ("pdf".equals(type)) {
            return "application/pdf".equals(contentType);
        }
        return false;
    }

    private String getSafeExt(String filename, String contentType, String type) {
        if ("image".equals(type)) {
            if ("image/png".equals(contentType)) return ".png";
            if ("image/jpeg".equals(contentType)) return ".jpg";
            return ".jpg";
        }
        if ("pdf".equals(type)) return ".pdf";
        return "";
    }
}
