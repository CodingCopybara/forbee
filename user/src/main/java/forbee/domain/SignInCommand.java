package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class SignInCommand {

    private String email;
    private String password;
}
