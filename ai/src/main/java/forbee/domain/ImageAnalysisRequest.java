package forbee.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ImageAnalysisRequest {
    private // 유저 ID
    private String imageUrl;
}
