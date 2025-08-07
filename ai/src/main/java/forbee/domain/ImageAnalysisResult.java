package forbee.domain;

import lombok.Value;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@Value
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImageAnalysisResult {
    private String userId;
    private String imageUrl;
    private String resultImagePath;
    private List<DetectedObject> detectedObjects;
    private String analysisId;
    private String timestamp;
    private String event_id;
    
    @Value
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class DetectedObject {
        private String label;
        private double confidence;
        private BoundingBox boundingBox;
    }
    
    @Value
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class BoundingBox {
        private int x;
        private int y;
        private int width;
        private int height;
    }
}
