package forbee.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostRevisionRepository extends JpaRepository<PostRevision, Long> {
    List<PostRevision> findByPostIdOrderByEditedAtDesc(Long postId);
}
