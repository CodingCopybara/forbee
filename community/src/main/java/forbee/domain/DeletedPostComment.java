package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class DeletedPostComment extends AbstractEvent {

    private Long id;

    public DeletedPostComment(Comment aggregate) {
        super(aggregate);
    }

    public DeletedPostComment() {
        super();
    }
}
//>>> DDD / Domain Event
