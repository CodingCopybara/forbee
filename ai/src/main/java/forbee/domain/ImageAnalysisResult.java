package forbee.domain;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class ImageAnalysisResult {

    private String userId;
    private String imageUrl;
    private String resultImagePath;
    private List<DetectedObject> detectedObjects;
}
