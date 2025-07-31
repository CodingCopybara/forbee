package forbee.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DetectedObject {
    private String label;
    private double confidence;
    private BoundingBox boundingBox;
}
