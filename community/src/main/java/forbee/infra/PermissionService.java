package forbee.infra;

import forbee.domain.BoardType;
import forbee.domain.Category;
import org.springframework.stereotype.Service;

@Service
public class PermissionService {

    public boolean canWritePost(BoardType boardType, Category category) {
        return category == Category.admin || category == Category.member;
    }

    public boolean canRead(BoardType boardType, Category category) {
        return category != null;
    }
}
