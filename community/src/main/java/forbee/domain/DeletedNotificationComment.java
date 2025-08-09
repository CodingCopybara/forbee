package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class DeletedNotificationComment extends AbstractEvent {

    private Long id;

    public DeletedNotificationComment(Comment aggregate) {
        super(aggregate);
    }

    public DeletedNotificationComment() {
        super();
    }
}
//>>> DDD / Domain Event
