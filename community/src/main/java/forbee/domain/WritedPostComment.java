package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class WritedPostComment extends AbstractEvent {

    private Long id;

    public WritedPostComment(Comment aggregate) {
        super(aggregate);
    }

    public WritedPostComment() {
        super();
    }
}
//>>> DDD / Domain Event
