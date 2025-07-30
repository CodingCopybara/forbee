package forbee.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.ChatbotApplication;
import java.time.LocalDate;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "chatbot_table")
@Data
public class Chatbot {
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date requestTime;

    @Embedded
    @AttributeOverrides({
      @AttributeOverride(name="message", column=@Column(name="request_message")),
      @AttributeOverride(name="time",    column=@Column(name="request_comment_time"))
    })
    private Comment request;

    @Embedded
    @AttributeOverrides({
      @AttributeOverride(name="message", column=@Column(name="response_message")),
      @AttributeOverride(name="time",    column=@Column(name="response_comment_time"))
    })
    private Comment response;


    public static ChatbotRepository repository() {
        ChatbotRepository chatbotRepository = ChatbotApplication.applicationContext.getBean(
            ChatbotRepository.class
        );
        return chatbotRepository;
    }
}



//>>> DDD / Aggregate Root