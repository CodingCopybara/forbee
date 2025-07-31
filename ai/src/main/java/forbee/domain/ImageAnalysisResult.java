package forbee.domain;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class ImageAnalysisResult {
    private // 유저 ID
    private String imageUrl;
    private List<DetectedObject> detectedObjects;
}
