package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class SignedIn extends AbstractEvent {

    private Long id;

    public SignedIn(User aggregate) {
        super(aggregate);
    }

    public SignedIn() {
        super();
    }
}
//>>> DDD / Domain Event
