package forbee.domain;
import java.util.List;
import forbee.web.dto.Attachment;

public class WritePostCommand {
    private String title;
    private String content;
    private String category;
    private String author;
    private List<Attachment> attachments;

    public WritePostCommand() {}

    public List<Attachment> getAttachments() { return attachments; }
    public void setAttachments(List<Attachment> attachments) { this.attachments = attachments; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
}