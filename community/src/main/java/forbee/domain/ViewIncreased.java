package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class ViewIncreased extends AbstractEvent {

    private Long id;

    public ViewIncreased(Post aggregate) {
        super(aggregate);
    }

    public ViewIncreased() {
        super();
    }
}
//>>> DDD / Domain Event
