package forbee.domain;

import forbee.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UserRepository
    extends PagingAndSortingRepository<User, Long> {}
