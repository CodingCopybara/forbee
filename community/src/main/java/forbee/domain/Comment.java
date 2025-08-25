package forbee.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long postId;
    private String content;
    private String author;
    private LocalDateTime createdAt;

    public Comment() {}

    public Long getId() { return id; }
    public Long getPostId() { return postId; }
    public void setPostId(Long postId) { this.postId = postId; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public void writeComment(WritePostCommentCommand cmd) {
        this.postId = cmd.getPostId();
        this.content = cmd.getContent();
        this.author = cmd.getAuthor();
        this.createdAt = LocalDateTime.now();
    }

    public void editComment(EditPostCommentCommand cmd) {
        this.content = cmd.getContent();
    }

    public void deleteComment(DeletePostCommentCommand cmd) {
        // deletion logic
    }
}