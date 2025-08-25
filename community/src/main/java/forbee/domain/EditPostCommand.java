package forbee.domain;

import java.util.List;

import javax.validation.constraints.NotBlank;
import forbee.web.dto.Attachment;

/**
 * 게시글 수정 커맨드
 * - author: 수정자(필수, 권한 체크용)
 * - title/content/attachments: 전달된 값만 수정(부분 업데이트)
 */
public class EditPostCommand {

    @NotBlank
    private String author;               // 프런트에서 username(아이디 앞부분)

    private String title;                // null이면 제목 미변경
    private String content;              // null이면 본문 미변경
    private List<Attachment> attachments; // null이면 첨부 미변경, []면 첨부 비움

    public EditPostCommand() {}

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public List<Attachment> getAttachments() { return attachments; }
    public void setAttachments(List<Attachment> attachments) { this.attachments = attachments; }
}
