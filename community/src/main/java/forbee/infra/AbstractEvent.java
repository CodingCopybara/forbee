package forbee.infra;

import java.util.Date;

public class AbstractEvent {
    private String eventType;
    private Date timestamp = new Date();

    public AbstractEvent() {}

    public String getEventType() { return eventType; }
    public void setEventType(String eventType) { this.eventType = eventType; }
    public Date getTimestamp() { return timestamp; }
    public void setTimestamp(Date timestamp) { this.timestamp = timestamp; }
}