package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class RequestDenyCommand {

    private Long id;
    private String userId;
    private String state;
}
