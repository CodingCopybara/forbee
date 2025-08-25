package forbee.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AgentResponse {
    private String prescription;
    private String response;
    private List<String> questions;
}
