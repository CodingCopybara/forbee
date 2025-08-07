package forbee.domain;

import java.time.LocalDateTime;

public class WritedPostComment {
    private final Long commentId;
    private final Long postId;
    private final String author;
    private final String content;
    private final LocalDateTime createdAt;

    public WritedPostComment(Long commentId, Long postId, String author, String content, LocalDateTime createdAt) {
        this.commentId = commentId;
        this.postId = postId;
        this.author = author;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Long getCommentId() { return commentId; }
    public Long getPostId()    { return postId; }
    public String getAuthor()  { return author; }
    public String getContent() { return content; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}