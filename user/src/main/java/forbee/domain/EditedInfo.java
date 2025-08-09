package forbee.domain;

import forbee.domain.*;
import forbee.infra.AbstractEvent;
import java.time.LocalDate;
import java.util.*;
import lombok.*;

//<<< DDD / Domain Event
@Data
@ToString
public class EditedInfo extends AbstractEvent {

    private Long id;

    public EditedInfo(User aggregate) {
        super(aggregate);
    }

    public EditedInfo() {
        super();
    }
}
//>>> DDD / Domain Event
