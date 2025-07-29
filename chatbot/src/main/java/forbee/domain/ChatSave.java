package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class ChatSave extends AbstractEvent {

    private Long id;

    public ChatSave(Chatbot aggregate) {
        super(aggregate);
    }

    public ChatSave() {
        super();
    }
}
//>>> DDD / Domain Event
