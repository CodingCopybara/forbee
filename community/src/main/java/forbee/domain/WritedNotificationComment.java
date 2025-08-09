package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class WritedNotificationComment extends AbstractEvent {

    private Long id;

    public WritedNotificationComment(Comment aggregate) {
        super(aggregate);
    }

    public WritedNotificationComment() {
        super();
    }
}
//>>> DDD / Domain Event
