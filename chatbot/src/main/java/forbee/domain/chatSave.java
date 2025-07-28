package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class chatSave extends AbstractEvent {

    private Long id;

    public chatSave(Chatbot aggregate) {
        super(aggregate);
    }

    public chatSave() {
        super();
    }
}
//>>> DDD / Domain Event
