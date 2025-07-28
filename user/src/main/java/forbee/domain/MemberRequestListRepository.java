package forbee.domain;

import forbee.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "memberRequestLists",
    path = "memberRequestLists"
)
public interface MemberRequestListRepository
    extends PagingAndSortingRepository<MemberRequestList, Long> {}
