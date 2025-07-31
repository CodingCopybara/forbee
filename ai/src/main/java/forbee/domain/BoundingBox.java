package forbee.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoundingBox {
    private int x;
    private int y;
    private int width;
    private int height;
}
