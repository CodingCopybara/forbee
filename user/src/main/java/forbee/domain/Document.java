package forbee.domain;

import javax.persistence.Embeddable;
import lombok.Data;

@Embeddable
@Data
public class Document {
    private String name;
    private String url;
}
