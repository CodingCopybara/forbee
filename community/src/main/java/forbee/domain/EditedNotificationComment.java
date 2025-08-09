package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class EditedNotificationComment extends AbstractEvent {

    private Long id;

    public EditedNotificationComment(Comment aggregate) {
        super(aggregate);
    }

    public EditedNotificationComment() {
        super();
    }
}
//>>> DDD / Domain Event
