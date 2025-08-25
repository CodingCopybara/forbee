package forbee;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Setter
@Getter
public class PredictionResult {
    @JsonProperty("image_data")
    private String imageData;

    @JsonProperty("pixel_ratios")
    private Map<String, Double> pixelRatios;

}