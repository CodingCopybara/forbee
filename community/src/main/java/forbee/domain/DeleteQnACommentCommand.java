package forbee.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;

@Data
public class DeleteQnACommentCommand {

    private Long id;
    private Long postId;
    private Long userId;
}
