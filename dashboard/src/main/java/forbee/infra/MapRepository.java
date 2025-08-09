package forbee.infra;

import forbee.domain.*;
import java.util.List;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "maps", path = "maps")
public interface MapRepository extends PagingAndSortingRepository<Map, Long> {}
