// src/main/java/forbee/domain/MilwonApplicationRepository.java
package forbee.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

import java.util.UUID;

public interface MilwonApplicationRepository extends JpaRepository<MilwonApplication, UUID> {
    List<MilwonApplication> findByUserId(Long userId);
}
