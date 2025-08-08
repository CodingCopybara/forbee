package forbee.infra;

import forbee.domain.BoardType;
import forbee.domain.Category;
import forbee.domain.Post;
import forbee.domain.PostRepository;
import forbee.domain.WritePostCommand;
import forbee.infra.PermissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(
    origins = "*",
    allowedHeaders = "*",   // Role, Content-Type 등 모든 헤더 허용
    methods = {            // CORS preflight 에서 허용할 HTTP 메서드
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.OPTIONS,
        RequestMethod.PUT,
        RequestMethod.DELETE
    }
)
@RestController
@RequestMapping("/posts")
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

        // 권한 체크
        BoardType board = BoardType.fromCategory(cmd.getCategory());
        if (!permissionService.canWritePost(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        // 작성자 기본값 처리
        String author = cmd.getAuthor();
        if (author == null || author.isBlank()) {
            author = "postcontroller";
        }
        cmd.setAuthor(author);

        // 글 저장
        Post p = new Post();
        p.writePost(cmd);
        Post saved = postRepository.save(p);

        // Location 헤더 설정
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

        final Category user;
        if (role != null && !role.isBlank()) {
            Category tmp;
            try {
                tmp = Category.valueOf(role.toUpperCase());
            } catch (IllegalArgumentException e) {
                tmp = null;
            }
            user = tmp;
        } else {
            user = null;
        }

        List<Post> posts = (category == null)
            ? postRepository.findAll()
            : postRepository.findByCategory(category);

        List<Post> allowed = posts.stream()
            // .filter(post -> {
            //     BoardType board = BoardType.fromCategory(post.getCategory());
            //     return permissionService.canRead(board, user);
            // })
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

    /**
     * 조회수 증가 전용 엔드포인트
     * POST /posts/{id}/view
     */
    @PostMapping("/{id}/view")
    public ResponseEntity<Void> incrementViewCount(
            @PathVariable Long id,
            @RequestHeader(value = "Role", required = false) String role) {

        // 권한 체크 로직 그대로 …
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        BoardType board = BoardType.fromCategory(post.getCategory());
        Category user = (role != null && !role.isBlank())
                ? Category.valueOf(role.toUpperCase())
                : null;
        if (!permissionService.canRead(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        // 조회수 증가
        post.setViews(post.getViews() + 1);
        postRepository.save(post);

        return ResponseEntity.noContent().build();
    }
}