package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class SignedUp extends AbstractEvent {

    private Long id;

    public SignedUp(User aggregate) {
        super(aggregate);
    }

    public SignedUp() {
        super();
    }
}
//>>> DDD / Domain Event
