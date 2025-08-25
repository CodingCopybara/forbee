// File: /workspace/forbee/community/src/main/java/forbee/domain/Post.java
package forbee.domain;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String attachmentsJson;

    private String title;
    
    @Lob
    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String content;
    private String category;
    private String author;
    private Integer views = 0;
    private LocalDateTime createdAt;

    public Post() {}


    public String getAttachmentsJson() { return attachmentsJson; }
    public void setAttachmentsJson(String v) { this.attachmentsJson = v; }
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public Integer getViews() { return views; }
    public void setViews(Integer views) { this.views = views; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public void writePost(WritePostCommand cmd) {
        this.title     = cmd.getTitle();
        this.content   = cmd.getContent();
        this.category  = cmd.getCategory();
        this.author    = cmd.getAuthor();
        this.createdAt = LocalDateTime.now();
    }

    public void editPost(EditPostCommand cmd) {
        this.title   = cmd.getTitle();
        this.content = cmd.getContent();
    }

    public void deletePost(DeletePostCommand cmd) {
        // 필요 시 삭제 로직
    }

    public void increaseView(IncreaseViewCommand cmd) {
        this.views = this.views + 1;
    }
}
