package forbee.infra;

import forbee.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class PostHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Post>> {

    @Override
    public EntityModel<Post> process(EntityModel<Post> model) {
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/writepost")
                .withRel("writepost")
        );
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/editpost")
                .withRel("editpost")
        );
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/deletepost")
                .withRel("deletepost")
        );
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/increaseview")
                .withRel("increaseview")
        );

        return model;
    }
}
