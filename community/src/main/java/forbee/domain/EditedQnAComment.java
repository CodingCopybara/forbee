package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class EditedQnAComment extends AbstractEvent {

    private Long id;

    public EditedQnAComment(Comment aggregate) {
        super(aggregate);
    }

    public EditedQnAComment() {
        super();
    }
}
//>>> DDD / Domain Event
