package forbee.domain;

import lombok.Value;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Value
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImageAnalysisResult {
    private String userId;
    private String resultImagePath;
}
