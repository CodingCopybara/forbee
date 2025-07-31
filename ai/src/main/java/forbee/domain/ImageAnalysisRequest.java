package forbee.domain;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ImageAnalysisRequest {

    @NotBlank(message = "User ID cannot be empty.")
    private String userId;
    @NotBlank(message = "Image URL cannot be empty.")
    @URL(message = "Image URL must be a valid URL format.")
    private String imageUrl;
}
