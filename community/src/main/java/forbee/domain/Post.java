package forbee.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private String category;
    private String author;

    public void writePost(WritePostCommand cmd) {
        this.title = cmd.getTitle();
        this.content = cmd.getContent();
        this.category = cmd.getCategory();
        this.author = cmd.getAuthor();
    }
}
