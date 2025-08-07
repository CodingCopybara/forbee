package forbee.domain;

public class DeletePostCommentCommand {
    private Long id;

    public DeletePostCommentCommand() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
}