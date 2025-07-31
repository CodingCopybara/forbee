package forbee.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class DetectedObject {

    private String label;
    private double confidence;
    private BoundingBox boundingBox;
}
