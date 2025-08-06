package forbee.infra;

import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.hateoas.EntityModel;
import forbee.domain.Comment;
import org.springframework.stereotype.Component;

@Component
public class CommentHateoasProcessor implements RepresentationModelProcessor<EntityModel<Comment>> {
    @Override
    public EntityModel<Comment> process(EntityModel<Comment> model) {
        // HATEOAS 링크 추가
        return model;
    }
}