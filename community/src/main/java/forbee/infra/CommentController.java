package forbee.infra;

import forbee.domain.Comment;
import forbee.domain.CommentRepository;
import forbee.domain.Post;
import forbee.domain.Category;
import forbee.domain.BoardType;
import forbee.domain.WritePostCommentCommand;
import forbee.domain.EditPostCommentCommand;
import forbee.domain.DeletePostCommentCommand;
import forbee.infra.PermissionService;
import forbee.domain.PostRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comments")

public class CommentController {
    private final CommentRepository repo;
    private final PostRepository postRepository;
    private final PermissionService permissionService;

    public CommentController(
        CommentRepository repo,
        PostRepository postRepository,
        PermissionService permissionService
    ) {
        this.repo = repo;
        this.postRepository = postRepository;
        this.permissionService = permissionService;
    }

    /**
     * 새로운 댓글 등록 (Role 헤더 필수)
     * POST /comments/write
     */
    @PostMapping("/write")
    public ResponseEntity<Comment> write(
        @RequestHeader(value = "Role", required = false) String role,
        @RequestBody WritePostCommentCommand cmd
    ) {
        Category user = (role != null) ? Category.valueOf(role.toUpperCase()) : null;
        Post post = postRepository.findById(cmd.getPostId()).orElseThrow(() -> new RuntimeException("Post not found"));
        BoardType board = BoardType.fromCategory(post.getCategory());
        if (!permissionService.canWriteComment(board, user)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Comment c = new Comment();
        c.writeComment(cmd);
        Comment saved = repo.save(c);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<List<Comment>> listByPost(@PathVariable Long postId) {
        List<Comment> comments = repo.findByPostId(postId);
        return ResponseEntity.ok(comments);
    }

    @PutMapping("/edit")
    public ResponseEntity<Comment> edit(@RequestBody EditPostCommentCommand cmd) {
        Comment existing = repo.findById(cmd.getId())
            .orElseThrow(() -> new RuntimeException("Comment not found"));
        existing.editComment(cmd);
        Comment updated = repo.save(existing);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Void> delete(@RequestBody DeletePostCommentCommand cmd) {
        repo.deleteById(cmd.getId());
        return ResponseEntity.noContent().build();
    }
}
