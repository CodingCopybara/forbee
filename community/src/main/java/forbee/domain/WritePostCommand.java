package forbee.domain;

import lombok.Data;

@Data
public class WritePostCommand {
    private String title;
    private String content;
    private String category;
    private String author;
}
