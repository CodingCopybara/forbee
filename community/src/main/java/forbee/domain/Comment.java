package forbee.domain;

import forbee.CommunityApplication;
import javax.persistence.*;
import java.util.List;
import lombok.Data;
import java.util.Date;
import java.time.LocalDate;
import java.util.Map;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Collections;


@Entity
@Table(name="Comment_table")
@Data

//<<< DDD / Aggregate Root
public class Comment  {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    
    
    
private Long id;    
    
    
private Long postId;    
    
    
private Long userId;    
    
    
private String content;    
    
    
private Date createdAt;    
    
    
private Date updatedAt;


    public static CommentRepository repository(){
        CommentRepository commentRepository = CommunityApplication.applicationContext.getBean(CommentRepository.class);
        return commentRepository;
    }

    public void writeComment(){
        //
    }


//<<< Clean Arch / Port Method
    public void writePostComment(WritePostCommentCommand writePostCommentCommand){
        
        //implement business logic here:
        


        WritedPostComment writedPostComment = new WritedPostComment(this);
        writedPostComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void deletePostComment(DeletePostCommentCommand deletePostCommentCommand){
        
        //implement business logic here:
        


        DeletedPostComment deletedPostComment = new DeletedPostComment(this);
        deletedPostComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void editPostComment(EditPostCommentCommand editPostCommentCommand){
        
        //implement business logic here:
        


        EditedPostComment editedPostComment = new EditedPostComment(this);
        editedPostComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void writeQnAComment(WriteQnACommentCommand writeQnACommentCommand){
        
        //implement business logic here:
        

        forbee.external.CommentQuery commentQuery = new forbee.external.CommentQuery();
        // commentQuery.set??()        
          = CommentApplication.applicationContext
            .getBean(forbee.external.Service.class)
            .comment(commentQuery);

        WritedQnAComment writedQnAComment = new WritedQnAComment(this);
        writedQnAComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void deleteQnAComment(DeleteQnACommentCommand deleteQnACommentCommand){
        
        //implement business logic here:
        


        DeletedQnAComment deletedQnAComment = new DeletedQnAComment(this);
        deletedQnAComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void editQnAComment(EditQnACommentCommand editQnACommentCommand){
        
        //implement business logic here:
        


        EditedQnAComment editedQnAComment = new EditedQnAComment(this);
        editedQnAComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void writeNotificationComment(WriteNotificationCommentCommand writeNotificationCommentCommand){
        
        //implement business logic here:
        


        WritedNotificationComment writedNotificationComment = new WritedNotificationComment(this);
        writedNotificationComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void deleteNotificationComment(DeleteNotificationCommentCommand deleteNotificationCommentCommand){
        
        //implement business logic here:
        


        DeletedNotificationComment deletedNotificationComment = new DeletedNotificationComment(this);
        deletedNotificationComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method
//<<< Clean Arch / Port Method
    public void editNotificationComment(EditNotificationCommentCommand editNotificationCommentCommand){
        
        //implement business logic here:
        


        EditedNotificationComment editedNotificationComment = new EditedNotificationComment(this);
        editedNotificationComment.publishAfterCommit();
    }
//>>> Clean Arch / Port Method



}
//>>> DDD / Aggregate Root
