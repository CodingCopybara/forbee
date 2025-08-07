package forbee.infra;

import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.hateoas.EntityModel;
import forbee.domain.Post;
import org.springframework.stereotype.Component;

@Component
public class PostHateoasProcessor implements RepresentationModelProcessor<EntityModel<Post>> {
    @Override
    public EntityModel<Post> process(EntityModel<Post> model) {
        // HATEOAS 링크 추가
        return model;
    }
}