package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class WritedQnAComment extends AbstractEvent {

    private Long id;

    public WritedQnAComment(Comment aggregate) {
        super(aggregate);
    }

    public WritedQnAComment() {
        super();
    }
}
//>>> DDD / Domain Event
