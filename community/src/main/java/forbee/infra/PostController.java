
package forbee.infra;

import forbee.domain.BoardType;
import forbee.domain.Category;
import forbee.domain.Post;
import forbee.domain.PostRepository;
import forbee.domain.WritePostCommand;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:8080")
public class PostController {
    private final PostRepository postRepository;
    private final PermissionService permissionService;

    public PostController(PostRepository postRepository, PermissionService permissionService) {
        this.postRepository = postRepository;
        this.permissionService = permissionService;
    }

    @PostMapping("/writepost")
    public ResponseEntity<Post> writePost(
            @RequestHeader(value = "Role", required = false) String role,
            @RequestBody WritePostCommand cmd) {

        // Role 헤더 유효성 검사
        Category user;
        if (role != null && !role.isBlank()) {
            try {
                user = Category.valueOf(role.toUpperCase());
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest().build();
            }
        } else {
            user = null;
        }

        BoardType board = BoardType.fromCategory(cmd.getCategory());
        if (!permissionService.canWritePost(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Post p = new Post();
        p.writePost(cmd);
        Post saved = postRepository.save(p);
        URI loc = ServletUriComponentsBuilder.fromCurrentRequest()
                   .path("/{id}")
                   .buildAndExpand(saved.getId())
                   .toUri();
        return ResponseEntity.created(loc).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<Post>> getPosts(
            @RequestParam(required = false) String category,
            @RequestHeader(value = "Role", required = false) String role) {

        // user 변수를 final로 선언하여 lambda에서 참조 가능하게 만듭니다.
        final Category user;
        if (role != null && !role.isBlank()) {
            Category tmp;
            try {
                tmp = Category.valueOf(role.toUpperCase());
            } catch (IllegalArgumentException e) {
                tmp = null; // 잘못된 role 무시
            }
            user = tmp;
        } else {
            user = null;
        }

        List<Post> posts = (category == null)
            ? postRepository.findAll()
            : postRepository.findByCategory(category);

        List<Post> allowed = posts.stream()
            .filter(post -> {
                BoardType board = BoardType.fromCategory(post.getCategory());
                return permissionService.canRead(board, user);
            })
            .collect(Collectors.toList());

        return ResponseEntity.ok(allowed);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(
            @PathVariable Long id,
            @RequestHeader(value = "Role", required = false) String role) {

        final Category user = (role != null && !role.isBlank())
            ? Category.valueOf(role.toUpperCase())
            : null;

        Post p = postRepository.findById(id)
                 .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        BoardType board = BoardType.fromCategory(p.getCategory());

        if (!permissionService.canRead(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        return ResponseEntity.ok(p);
    }
}