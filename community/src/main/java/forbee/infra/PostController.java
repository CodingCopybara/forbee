package forbee.infra;

import forbee.domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@Transactional

public class PostController {

    @Autowired
    PostRepository postRepository;

    @Autowired
    PermissionService permissionService;

    @PostMapping("/posts/writepost")
    public ResponseEntity<Post> writePost(
        @RequestHeader("Role") String role,
        @RequestBody WritePostCommand cmd
    ) {
        if (role == null) role = "user";   ////// 임시로 권한 부여
        BoardType boardType = BoardType.fromCategory(cmd.getCategory());
        Category category = Category.valueOf(role);

        if (!permissionService.canWritePost(boardType, category)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Post post = new Post();
        post.writePost(cmd);
        postRepository.save(post);
        return ResponseEntity.ok(post);
    }

    @GetMapping("/posts")
    public ResponseEntity<?> getPosts(
        @RequestParam String category,
        @RequestHeader(value = "Role", required = false) String role
    ) {
        try {
            BoardType boardType = BoardType.fromCategory(category); // 여기가 문제일 수 있음
            Category userRole = (role != null) ? Category.valueOf(role) : null;

            if (!permissionService.canRead(boardType, userRole)) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }

            return ResponseEntity.ok(postRepository.findByCategory(category));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("오류 발생: " + e.getMessage());
        }
    }

    @RestControllerAdvice
    public class GlobalExceptionHandler {

        @ExceptionHandler(Exception.class)
        public ResponseEntity<String> handleAll(Exception e) {
            e.printStackTrace(); // 콘솔 출력
            return ResponseEntity.badRequest().body("에러 발생: " + e.getMessage());
        }
    }
}
