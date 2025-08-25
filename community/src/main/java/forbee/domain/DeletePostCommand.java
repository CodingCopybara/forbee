package forbee.domain;

public class DeletePostCommand {
    private Long id;

    public DeletePostCommand() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
}