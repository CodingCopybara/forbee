package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class SignUpCommand {

    private String email;
    private String name;
    private String password;
    private role role;
}
