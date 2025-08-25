package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class RequestApproved extends AbstractEvent {

    private Long id;

    public RequestApproved(MemberRequestList aggregate) {
        super(aggregate);
    }

    public RequestApproved() {
        super();
    }
}
//>>> DDD / Domain Event
