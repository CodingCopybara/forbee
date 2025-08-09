package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class EditedPostComment extends AbstractEvent {

    private Long id;
    private String content;
    private Date updatedAt;

    public EditedPostComment(Comment aggregate) {
        super(aggregate);
    }

    public EditedPostComment() {
        super();
    }
}
//>>> DDD / Domain Event
