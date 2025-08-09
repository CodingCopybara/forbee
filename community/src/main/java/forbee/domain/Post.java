package forbee.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import forbee.CommunityApplication;
import java.time.LocalDate;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Post_table")
@Data
//<<< DDD / Aggregate Root
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long userId;

    private PostType category;

    private String title;

    private String content;

    private Long view;

    private String image;

    private Date createdAt;

    private Date updatedAt;

    public static PostRepository repository() {
        PostRepository postRepository = CommunityApplication.applicationContext.getBean(
            PostRepository.class
        );
        return postRepository;
    }

    //<<< Clean Arch / Port Method
    public void writePost(WritePostCommand writePostCommand) {
        //implement business logic here:

    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void editPost(EditPostCommand editPostCommand) {
        //implement business logic here:

    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void deletePost(DeletePostCommand deletePostCommand) {
        //implement business logic here:

    }

    //>>> Clean Arch / Port Method
    //<<< Clean Arch / Port Method
    public void increaseView() {
        //implement business logic here:

        ViewIncreased viewIncreased = new ViewIncreased(this);
        viewIncreased.publishAfterCommit();
    }
    //>>> Clean Arch / Port Method

}
//>>> DDD / Aggregate Root
