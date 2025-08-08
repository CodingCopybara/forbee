package forbee.domain;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(
    collectionResourceRel = "chatbot",  // _links.chatbot 으로 노출
    path = "chatbot"                    // /chatbot URL 사용
)
public interface ChatbotRepository extends JpaRepository<Chatbot, Long> {
    List<Chatbot> findByUserIdOrderByRequestTimeAsc(String userId);
}
