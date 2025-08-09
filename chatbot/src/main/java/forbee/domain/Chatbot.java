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
@Table(name = "Chatbot_table")
@Data
//<<< DDD / Aggregate Root
public class Chatbot {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date requestTime;

    @Embedded
    private Comment request;

    @Embedded
    private Comment response;

    public static ChatbotRepository repository() {
        ChatbotRepository chatbotRepository = ChatbotApplication.applicationContext.getBean(
            ChatbotRepository.class
        );
        return chatbotRepository;
    }
}
//>>> DDD / Aggregate Root
