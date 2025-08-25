package forbee.domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatbotRepository extends JpaRepository<ChatSave, Long> {
}