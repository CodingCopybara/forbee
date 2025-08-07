package forbee.domain;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatbotRepository extends JpaRepository<Chatbot, Long> {
    List<Chatbot> findByUserIdOrderByRequestTimeAsc(String userId);
}
