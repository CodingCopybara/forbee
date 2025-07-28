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
// @RequestMapping(value="/comments")
@Transactional
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @RequestMapping(
        value = "/comments/writepostcomment",
        method = RequestMethod.POST,
        produces = "application/json;charset=UTF-8"
    )
    public Comment writePostComment(
        HttpServletRequest request,
        HttpServletResponse response,
        @RequestBody WritePostCommentCommand writePostCommentCommand
    ) throws Exception {
        System.out.println("##### /comment/writePostComment  called #####");
        Comment comment = new Comment();
        comment.writePostComment(writePostCommentCommand);
        commentRepository.save(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/{id}/deletepostcomment",
        method = RequestMethod.DELETE,
        produces = "application/json;charset=UTF-8"
    )
    public Comment deletePostComment(
        @PathVariable(value = "id") Long id,
        @RequestBody DeletePostCommentCommand deletePostCommentCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println("##### /comment/deletePostComment  called #####");
        Optional<Comment> optionalComment = commentRepository.findById(id);

        optionalComment.orElseThrow(() -> new Exception("No Entity Found"));
        Comment comment = optionalComment.get();
        comment.deletePostComment(deletePostCommentCommand);

        commentRepository.delete(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/{id}/editpostcomment",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Comment editPostComment(
        @PathVariable(value = "id") Long id,
        @RequestBody EditPostCommentCommand editPostCommentCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println("##### /comment/editPostComment  called #####");
        Optional<Comment> optionalComment = commentRepository.findById(id);

        optionalComment.orElseThrow(() -> new Exception("No Entity Found"));
        Comment comment = optionalComment.get();
        comment.editPostComment(editPostCommentCommand);

        commentRepository.save(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/writeqnacomment",
        method = RequestMethod.POST,
        produces = "application/json;charset=UTF-8"
    )
    public Comment writeQnAComment(
        HttpServletRequest request,
        HttpServletResponse response,
        @RequestBody WriteQnACommentCommand writeQnACommentCommand
    ) throws Exception {
        System.out.println("##### /comment/writeQnAComment  called #####");
        Comment comment = new Comment();
        comment.writeQnAComment(writeQnACommentCommand);
        commentRepository.save(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/{id}/deleteqnacomment",
        method = RequestMethod.DELETE,
        produces = "application/json;charset=UTF-8"
    )
    public Comment deleteQnAComment(
        @PathVariable(value = "id") Long id,
        @RequestBody DeleteQnACommentCommand deleteQnACommentCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println("##### /comment/deleteQnAComment  called #####");
        Optional<Comment> optionalComment = commentRepository.findById(id);

        optionalComment.orElseThrow(() -> new Exception("No Entity Found"));
        Comment comment = optionalComment.get();
        comment.deleteQnAComment(deleteQnACommentCommand);

        commentRepository.delete(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/{id}/editqnacomment",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Comment editQnAComment(
        @PathVariable(value = "id") Long id,
        @RequestBody EditQnACommentCommand editQnACommentCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println("##### /comment/editQnAComment  called #####");
        Optional<Comment> optionalComment = commentRepository.findById(id);

        optionalComment.orElseThrow(() -> new Exception("No Entity Found"));
        Comment comment = optionalComment.get();
        comment.editQnAComment(editQnACommentCommand);

        commentRepository.save(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/writenotificationcomment",
        method = RequestMethod.POST,
        produces = "application/json;charset=UTF-8"
    )
    public Comment writeNotificationComment(
        HttpServletRequest request,
        HttpServletResponse response,
        @RequestBody WriteNotificationCommentCommand writeNotificationCommentCommand
    ) throws Exception {
        System.out.println(
            "##### /comment/writeNotificationComment  called #####"
        );
        Comment comment = new Comment();
        comment.writeNotificationComment(writeNotificationCommentCommand);
        commentRepository.save(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/{id}/deletenotificationcomment",
        method = RequestMethod.DELETE,
        produces = "application/json;charset=UTF-8"
    )
    public Comment deleteNotificationComment(
        @PathVariable(value = "id") Long id,
        @RequestBody DeleteNotificationCommentCommand deleteNotificationCommentCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println(
            "##### /comment/deleteNotificationComment  called #####"
        );
        Optional<Comment> optionalComment = commentRepository.findById(id);

        optionalComment.orElseThrow(() -> new Exception("No Entity Found"));
        Comment comment = optionalComment.get();
        comment.deleteNotificationComment(deleteNotificationCommentCommand);

        commentRepository.delete(comment);
        return comment;
    }

    @RequestMapping(
        value = "/comments/{id}/editnotificationcomment",
        method = RequestMethod.PUT,
        produces = "application/json;charset=UTF-8"
    )
    public Comment editNotificationComment(
        @PathVariable(value = "id") Long id,
        @RequestBody EditNotificationCommentCommand editNotificationCommentCommand,
        HttpServletRequest request,
        HttpServletResponse response
    ) throws Exception {
        System.out.println(
            "##### /comment/editNotificationComment  called #####"
        );
        Optional<Comment> optionalComment = commentRepository.findById(id);

        optionalComment.orElseThrow(() -> new Exception("No Entity Found"));
        Comment comment = optionalComment.get();
        comment.editNotificationComment(editNotificationCommentCommand);

        commentRepository.save(comment);
        return comment;
    }
}
//>>> Clean Arch / Inbound Adaptor
