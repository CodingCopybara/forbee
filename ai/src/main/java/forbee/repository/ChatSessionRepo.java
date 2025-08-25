package forbee.repository;

import forbee.domain.ChatSession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChatSessionRepo extends JpaRepository<ChatSession, Long> {
    Optional<ChatSession> findTopByUserIdOrderByCreatedAtDesc(String userId);
}