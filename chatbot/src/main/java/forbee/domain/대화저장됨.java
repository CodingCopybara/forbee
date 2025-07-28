package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class 대화저장됨 extends AbstractEvent {

    private Long id;

    public 대화저장됨(Chatbot aggregate) {
        super(aggregate);
    }

    public 대화저장됨() {
        super();
    }
}
//>>> DDD / Domain Event
