package forbee.domain;

import forbee.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "chatbots", path = "chatbots")
public interface ChatbotRepository
    extends PagingAndSortingRepository<Chatbot, Long> {}
