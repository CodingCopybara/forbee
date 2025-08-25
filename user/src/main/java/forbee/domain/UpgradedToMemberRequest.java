package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class UpgradedToMemberRequest extends AbstractEvent {

    private Long id;

    public UpgradedToMemberRequest(MemberRequestList aggregate) {
        super(aggregate);
    }

    public UpgradedToMemberRequest() {
        super();
    }
}
//>>> DDD / Domain Event
