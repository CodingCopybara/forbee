package forbee.infra;

import forbee.domain.BoardType;
import forbee.domain.Category;
import org.springframework.stereotype.Service;

@Service
public class PermissionService {

    // 읽기 권한
    public boolean canRead(BoardType board, Category user) {
        System.out.println("읽기 권한 요청받음!!! board : " + board + " / user : " + user);
        if (board == null) return false;

        switch (board) {
            case GENERAL: return true;                 // 자유게시판: 모두 읽기 가능
            case QNA:     return user != null;         // 로그인 필요
            case NOTICE:  return user != null;         // 로그인 필요
            default:      return false;
        }
    }

    // 게시글 작성 권한
    public boolean canWritePost(BoardType board, Category user) {
        if (board == null) return false;

        switch (board) {
            case GENERAL: return user != null;                 // 로그인 사용자
            case QNA:     return user == Category.MEMBER;      // MEMBER만
            case NOTICE:  return user == Category.ADMIN;       // ADMIN만
            default:      return false;
        }
    }

    // 댓글 작성 권한
    public boolean canWriteComment(BoardType board, Category user) {
        if (board == null) return false;

        switch (board) {
            case GENERAL: return user != null;                         // 로그인 사용자
            case QNA:     return user == Category.VETERINARIAN;        // 수의사만
            case NOTICE:  return false;                                 // 불가
            default:      return false;
        }
    }
}
