package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class WithdrawedMember extends AbstractEvent {

    private Long id;

    public WithdrawedMember(User aggregate) {
        super(aggregate);
    }

    public WithdrawedMember() {
        super();
    }
}
//>>> DDD / Domain Event
