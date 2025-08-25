package forbee.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ImageAnalysisRequest {

    private String userId;
    private String imageUrl;
}
