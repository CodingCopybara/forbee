package forbee.domain;

import forbee.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface PostRepository
    extends PagingAndSortingRepository<Post, Long> {}
