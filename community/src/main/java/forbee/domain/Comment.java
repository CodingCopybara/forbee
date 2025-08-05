package forbee.domain;

import forbee.CommunityApplication;
import javax.persistence.*;
import java.util.Date;
import lombok.Data;

@Entity
@Table(name="Comment_table")
@Data
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long postId;
    private Long userId;
    private String content;
    private Date createdAt;
    private Date updatedAt;

    public static CommentRepository repository() {
        return CommunityApplication.applicationContext.getBean(CommentRepository.class);
    }

    public void writeComment() {
        // implement writing logic if needed
    }

    public void writePostComment(WritePostCommentCommand command) {
        WritedPostComment event = new WritedPostComment(this);
        event.publishAfterCommit();
    }

    public void deletePostComment(DeletePostCommentCommand command) {
        DeletedPostComment event = new DeletedPostComment(this);
        event.publishAfterCommit();
    }

    public void editPostComment(EditPostCommentCommand command) {
        EditedPostComment event = new EditedPostComment(this);
        event.publishAfterCommit();
    }

    public void writeQnAComment(WriteQnACommentCommand command) {
        WritedQnAComment event = new WritedQnAComment(this);
        event.publishAfterCommit();
    }

    public void deleteQnAComment(DeleteQnACommentCommand command) {
        DeletedQnAComment event = new DeletedQnAComment(this);
        event.publishAfterCommit();
    }

    public void editQnAComment(EditQnACommentCommand command) {
        EditedQnAComment event = new EditedQnAComment(this);
        event.publishAfterCommit();
    }

    public void writeNotificationComment(WriteNotificationCommentCommand command) {
        WritedNotificationComment event = new WritedNotificationComment(this);
        event.publishAfterCommit();
    }

    public void deleteNotificationComment(DeleteNotificationCommentCommand command) {
        DeletedNotificationComment event = new DeletedNotificationComment(this);
        event.publishAfterCommit();
    }

    public void editNotificationComment(EditNotificationCommentCommand command) {
        EditedNotificationComment event = new EditedNotificationComment(this);
        event.publishAfterCommit();
    }
}
