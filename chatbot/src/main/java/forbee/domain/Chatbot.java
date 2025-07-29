package forbee.domain;

// import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.ChatbotApplication;
import java.util.Date;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Chatbot_table")
@Data
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
        return ChatbotApplication
            .applicationContext
            .getBean(ChatbotRepository.class);
    }
}
