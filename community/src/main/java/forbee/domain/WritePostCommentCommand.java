package forbee.domain;

public class WritePostCommentCommand {
    private Long postId;
    private String content;
    private String author;

    public WritePostCommentCommand() {}

    public Long getPostId() { return postId; }
    public void setPostId(Long postId) { this.postId = postId; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
}