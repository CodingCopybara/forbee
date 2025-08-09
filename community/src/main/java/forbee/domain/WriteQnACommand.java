package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class WriteQnACommand {

    private Long userId;
    private String title;
    private String content;
    private String image;
}
