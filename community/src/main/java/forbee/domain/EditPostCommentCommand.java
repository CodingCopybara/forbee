package forbee.domain;

public class EditPostCommentCommand {
    private Long id;
    private String content;

    public EditPostCommentCommand() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}