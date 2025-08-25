package forbee.repository;

import forbee.domain.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatMessageRepo extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findBySessionIdOrderByTsAsc(Long sessionId);
}