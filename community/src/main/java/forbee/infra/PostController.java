package forbee.infra;

import forbee.domain.BoardType;
import forbee.domain.Category;
import forbee.domain.EditPostCommand;
import forbee.domain.Post;
import forbee.domain.PostRepository;
import forbee.domain.PostRevision;
import forbee.domain.PostRevisionRepository;
import forbee.domain.WritePostCommand;
import javax.validation.Valid;
import forbee.infra.PermissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import forbee.domain.PostRevisionRepository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.web.dto.Attachment;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;



@RestController
@RequestMapping("/posts")
public class PostController {
    private final PostRepository postRepository;
    private final PermissionService permissionService;
    private final PostRevisionRepository revisionRepository;

    public PostController(PostRepository postRepository, PermissionService permissionService, PostRevisionRepository revisionRepository) {
        this.postRepository = postRepository;
        this.permissionService = permissionService;
        this.revisionRepository = revisionRepository;
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


        ObjectMapper om = new ObjectMapper();
        try {
            if (cmd.getAttachments() != null) {
                String json = om.writeValueAsString(cmd.getAttachments());
                p.setAttachmentsJson(json);
            } else {
                p.setAttachmentsJson(null);
            }
        } catch (JsonProcessingException e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "첨부파일 정보를 JSON으로 변환할 수 없습니다.",
                    e
            );
        }


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

    @PutMapping("/{id}")
    public ResponseEntity<Post> editPost(
        @PathVariable Long id,
        @RequestHeader(value = "Role", required = false) String role,
        @Valid @RequestBody EditPostCommand cmd   // ✅
    ) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    
        // 본인/ADMIN 체크
        String editor = cmd.getAuthor(); // 프런트에서 username(아이디 앞부분) 넣는 구조
        boolean isAdmin = role != null && role.equalsIgnoreCase("ADMIN");
        if (!isAdmin) {
            if (editor == null || !editor.equalsIgnoreCase(post.getAuthor())) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
            }
        }
    
        // 보드 권한(선택): 기존 permissionService 로직을 쓰고 싶으면 여기에 추가
    
        // 1) 수정 전 이력 저장
        PostRevision rev = PostRevision.builder()
                .postId(post.getId())
                .titleBefore(post.getTitle())
                .contentBefore(post.getContent())
                .attachmentsJson(null) // 첨부를 JSON으로 보관하려면 직렬화해서 넣기
                .editedBy(editor)
                .editedAt(java.time.LocalDateTime.now())
                .build();
        revisionRepository.save(rev);
    
        // 2) 수정 반영
        if (cmd.getTitle() != null) post.setTitle(cmd.getTitle());
        if (cmd.getContent() != null) post.setContent(cmd.getContent());

        // 첨부: 항상 JSON 문자열로 저장 (writePost와 동일한 방식)
        try {
            if (cmd.getAttachments() != null) {
                String json = new ObjectMapper().writeValueAsString(cmd.getAttachments());
                post.setAttachmentsJson(json);
            } else {
                post.setAttachmentsJson(null);
            }
        } catch (JsonProcessingException e) {
            throw new ResponseStatusException(
                HttpStatus.BAD_REQUEST, "첨부파일 정보를 JSON으로 변환할 수 없습니다.", e
            );
        }

        // updatedAt 직접 세팅 제거 (Auditing을 쓰거나 엔티티에 있는 필드명/타입에 맞게 수정)
        Post saved = postRepository.save(post);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/{id}/revisions")
    public ResponseEntity<List<PostRevision>> getRevisions(@PathVariable Long id) {
        // 존재 확인 (선택)
        postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        return ResponseEntity.ok(revisionRepository.findByPostIdOrderByEditedAtDesc(id));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(
            @PathVariable Long id,
            @RequestHeader(value = "Role", required = false) String role,
            @RequestHeader(value = "X-Role", required = false) String xrole) {

        // X-Role 우선, 없으면 Role 사용
        String effectiveRole = (xrole != null) ? xrole : role;
        boolean isAdmin = effectiveRole != null && effectiveRole.equalsIgnoreCase("ADMIN");
        if (!isAdmin) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        postRepository.delete(post);
        return ResponseEntity.noContent().build();
    }
    
    
}