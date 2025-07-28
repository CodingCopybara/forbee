package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class WriteNotificationCommand {

    private Long id;
    private Long userId;
    private String title;
    private String content;
}
