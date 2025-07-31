package forbee.domain;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class DetectedObject {
    private List<Integer> box;
    private String label;
    // private double confidence;
    // private BoundingBox boundingBox;
    private double score;
}
