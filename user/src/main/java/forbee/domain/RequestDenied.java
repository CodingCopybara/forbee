package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class RequestDenied extends AbstractEvent {

    private Long id;

    public RequestDenied(MemberRequestList aggregate) {
        super(aggregate);
    }

    public RequestDenied() {
        super();
    }
}
//>>> DDD / Domain Event
