package forbee.infra;

import forbee.domain.*;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//<<< Clean Arch / Inbound Adaptor

@RestController
// @RequestMapping(value="/posts")
@Transactional
public class PostController {

    @Autowired
    PostRepository postRepository;

    @RequestMapping(
        value = "/posts/writepost",
        method = RequestMethod.POST,
        produces = "application/json;charset=UTF-8"
    )
    public Post writePost(
        HttpServletRequest request,
        HttpServletResponse response,
        @RequestBody WritePostCommand writePostCommand
    ) throws Exception {
        System.out.println("##### /post/writePost  called #####");
        Post post = new Post();
        post.writePost(writePostCommand);
        postRepository.save(post);
        return post;
    }

    @RequestMapping(
        value = "/posts/{id}/editpost",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Post editPost(
        @PathVariable(value = "id") Long id,
        @RequestBody EditPostCommand editPostCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println("##### /post/editPost  called #####");
        Optional<Post> optionalPost = postRepository.findById(id);

        optionalPost.orElseThrow(() -> new Exception("No Entity Found"));
        Post post = optionalPost.get();
        post.editPost(editPostCommand);

        postRepository.save(post);
        return post;
    }

    @RequestMapping(
        value = "/posts/{id}/deletepost",
        method = RequestMethod.DELETE,
        produces = "application/json;charset=UTF-8"
    )
    public Post deletePost(
        @PathVariable(value = "id") Long id,
        @RequestBody DeletePostCommand deletePostCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println("##### /post/deletePost  called #####");
        Optional<Post> optionalPost = postRepository.findById(id);

        optionalPost.orElseThrow(() -> new Exception("No Entity Found"));
        Post post = optionalPost.get();
        post.deletePost(deletePostCommand);

        postRepository.delete(post);
        return post;
    }

    @RequestMapping(
        value = "/posts/{id}/increaseview",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Post increaseView(
        @PathVariable(value = "id") Long id,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println("##### /post/increaseView  called #####");
        Optional<Post> optionalPost = postRepository.findById(id);

        optionalPost.orElseThrow(() -> new Exception("No Entity Found"));
        Post post = optionalPost.get();
        post.increaseView();

        postRepository.save(post);
        return post;
    }
}
//>>> Clean Arch / Inbound Adaptor
