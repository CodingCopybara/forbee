package forbee.infra;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor 
public class BloomPredictionResponse {
    private String status;
    private String predictedDate;
    private Double confidence;
    private String temperature;
    private String humidity;
    private String windSpeed;
    private String previousYearBloomDate;
}