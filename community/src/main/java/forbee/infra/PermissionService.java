package forbee.infra;

import forbee.domain.BoardType;
import forbee.domain.Category;
import org.springframework.stereotype.Service;

@Service
public class PermissionService {

    // 읽기 권한 검사
    public boolean canRead(BoardType board, Category user) {
        switch (board) {
            case GENERAL: return true;                                         // 자유게시판: 모두 읽기 가능
            case QNA:     return user != null;
            case NOTICE:  return user != null;                                 // 공지사항: 로그인 사용자만
            default:      return false;
        }
    }

    // 게시글 작성 권한 검사
    public boolean canWritePost(BoardType board, Category user) {
        switch (board) {
            case GENERAL: return user != null;                                 // 자유게시판: 로그인 사용자 이상
            case QNA:     return user == Category.MEMBER;                     // QnA: member만
            case NOTICE:  return user == Category.ADMIN;                      // 공지사항: admin만
            default:      return false;
        }
    }

    // 댓글 작성 권한 검사
    public boolean canWriteComment(BoardType board, Category user) {
        switch (board) {
            case GENERAL: return user != null;                                 // 자유게시판: 로그인 사용자 이상
            case QNA:     return user == Category.VETERINARIAN;               // QnA: veterinarian만
            case NOTICE:  return false;                                       // 공지사항: 불가
            default:      return false;
        }
    }
}