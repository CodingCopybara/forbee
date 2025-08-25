package forbee.infra;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.domain.BoardType;
import forbee.domain.Category;
import forbee.domain.EditPostCommand;
import forbee.domain.Post;
import forbee.domain.PostRepository;
import forbee.domain.PostRevision;
import forbee.domain.PostRevisionRepository;
import forbee.domain.WritePostCommand;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostRepository postRepository;
    private final PermissionService permissionService;
    private final PostRevisionRepository revisionRepository;
    private final ObjectMapper objectMapper;

    public PostController(PostRepository postRepository,
                          PermissionService permissionService,
                          PostRevisionRepository revisionRepository,
                          ObjectMapper objectMapper) {
        this.postRepository = postRepository;
        this.permissionService = permissionService;
        this.revisionRepository = revisionRepository;
        this.objectMapper = objectMapper;
    }

    /* =========================
       공통 유틸
       ========================= */

    private Category parseRole(String roleHeader) {
        if (roleHeader == null || roleHeader.isBlank()) return null;
        try {
            return Category.valueOf(roleHeader.trim().toUpperCase());
        } catch (IllegalArgumentException e) {
            return null; // 잘못된 값이면 null 취급(비로그인 동일)
        }
    }

    private BoardType parseBoard(String categoryStr) {
        try {
            return BoardType.fromCategory(categoryStr); // "free/notice/qna" 등을 BoardType으로 매핑
        } catch (Exception e) {
            return null;
        }
    }

    /* =========================
       API
       ========================= */

    @PostMapping("/writepost")
    public ResponseEntity<?> writePost(
            @RequestHeader(value = "Role", required = false) String role,
            @RequestBody WritePostCommand cmd) {

        final Category user = parseRole(role);
        final BoardType board = parseBoard(cmd.getCategory());

        if (board == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "BAD_CATEGORY", "message", "유효하지 않은 카테고리입니다."));
        }

        if (!permissionService.canWritePost(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("error","FORBIDDEN","message","작성 권한이 없습니다."));
        }

        // 작성자 기본값
        if (cmd.getAuthor() == null || cmd.getAuthor().isBlank()) {
            cmd.setAuthor("postcontroller");
        }

        // 엔티티 생성/매핑
        Post p = new Post();
        p.writePost(cmd);

        // 첨부 JSON
        try {
            if (cmd.getAttachments() != null) {
                p.setAttachmentsJson(objectMapper.writeValueAsString(cmd.getAttachments()));
            } else {
                p.setAttachmentsJson(null);
            }
        } catch (JsonProcessingException e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "첨부파일 정보를 JSON으로 변환할 수 없습니다.", e);
        }

        Post saved = postRepository.save(p);

        URI loc = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(saved.getId()).toUri();

        return ResponseEntity.created(loc).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<Post>> getPosts(
            @RequestParam(required = false) String category,
            @RequestHeader(value = "Role", required = false) String role) {

        // 필요시 목록 조회도 권한 필터링 가능 (현재는 전체 노출)
        List<Post> posts = (category == null)
                ? postRepository.findAll()
                : postRepository.findByCategory(category);

        // 예: 목록 권한 필터링을 켜고 싶다면 아래 주석 해제
        // final Category user = parseRole(role);
        // posts = posts.stream()
        //         .filter(p -> permissionService.canRead(parseBoard(p.getCategory()), user))
        //         .collect(Collectors.toList());

        return ResponseEntity.ok(posts);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostById(
            @PathVariable Long id,
            @RequestHeader(value = "Role", required = false) String role) {

        final Category user = parseRole(role);

        Post p = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        BoardType board = parseBoard(p.getCategory());
        if (!permissionService.canRead(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("error","FORBIDDEN","message","읽기 권한이 없습니다."));
        }
        return ResponseEntity.ok(p);
    }

    /**
     * 조회수 증가
     */
    @PostMapping("/{id}/view")
    public ResponseEntity<?> incrementViewCount(
            @PathVariable Long id,
            @RequestHeader(value = "Role", required = false) String role) {

        final Category user = parseRole(role);

        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        BoardType board = parseBoard(post.getCategory());
        if (!permissionService.canRead(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("error","FORBIDDEN","message","읽기 권한이 없습니다."));
        }

        post.setViews(post.getViews() + 1);
        postRepository.save(post);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editPost(
            @PathVariable Long id,
            @RequestHeader(value = "Role", required = false) String role,
            @Valid @RequestBody EditPostCommand cmd) {

        final Category user = parseRole(role);

        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        // 본인/ADMIN 체크
        boolean isAdmin = (user == Category.ADMIN);
        String editor = cmd.getAuthor(); // 프런트에서 username 전달
        if (!isAdmin) {
            if (editor == null || !editor.equalsIgnoreCase(post.getAuthor())) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body(Map.of("error","FORBIDDEN","message","수정 권한이 없습니다."));
            }
        }

        // 수정 전 이력 저장
        PostRevision rev = PostRevision.builder()
                .postId(post.getId())
                .titleBefore(post.getTitle())
                .contentBefore(post.getContent())
                .attachmentsJson(post.getAttachmentsJson()) // 원본 첨부도 보관
                .editedBy(editor)
                .editedAt(java.time.LocalDateTime.now())
                .build();
        revisionRepository.save(rev);

        // 변경 반영
        if (cmd.getTitle() != null)   post.setTitle(cmd.getTitle());
        if (cmd.getContent() != null) post.setContent(cmd.getContent());

        try {
            if (cmd.getAttachments() != null) {
                post.setAttachmentsJson(objectMapper.writeValueAsString(cmd.getAttachments()));
            } else {
                post.setAttachmentsJson(null);
            }
        } catch (JsonProcessingException e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "첨부파일 정보를 JSON으로 변환할 수 없습니다.", e);
        }

        Post saved = postRepository.save(post);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}/revisions")
    public ResponseEntity<List<PostRevision>> getRevisions(@PathVariable Long id) {
        postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return ResponseEntity.ok(revisionRepository.findByPostIdOrderByEditedAtDesc(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(
            @PathVariable Long id,
            @RequestHeader(value = "Role", required = false) String role,
            @RequestHeader(value = "X-Role", required = false) String xrole) {

        // X-Role 우선
        Category user = parseRole(xrole != null ? xrole : role);
        boolean isAdmin = user == Category.ADMIN;
        if (!isAdmin) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("error","FORBIDDEN","message","삭제 권한이 없습니다."));
        }

        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        postRepository.delete(post);
        return ResponseEntity.noContent().build();
    }
}
