package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class EditInfoCommand {

    private Long id;
    private String password;
}
