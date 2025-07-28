package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class DeletedQnAComment extends AbstractEvent {

    private Long id;

    public DeletedQnAComment(Comment aggregate) {
        super(aggregate);
    }

    public DeletedQnAComment() {
        super();
    }
}
//>>> DDD / Domain Event
