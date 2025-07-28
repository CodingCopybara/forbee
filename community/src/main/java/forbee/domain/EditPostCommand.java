package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class EditPostCommand {

    private Long userId;
    private String title;
    private String content;
    private String image;
}
