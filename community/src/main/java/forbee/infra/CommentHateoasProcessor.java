package forbee.infra;

import forbee.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class CommentHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Comment>> {

    @Override
    public EntityModel<Comment> process(EntityModel<Comment> model) {
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/writepostcomment"
                )
                .withRel("writepostcomment")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/deletepostcomment"
                )
                .withRel("deletepostcomment")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() + "/editpostcomment"
                )
                .withRel("editpostcomment")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() + "/writeqnacomment"
                )
                .withRel("writeqnacomment")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/deleteqnacomment"
                )
                .withRel("deleteqnacomment")
        );
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/editqnacomment")
                .withRel("editqnacomment")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/writenotificationcomment"
                )
                .withRel("writenotificationcomment")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/deletenotificationcomment"
                )
                .withRel("deletenotificationcomment")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/editnotificationcomment"
                )
                .withRel("editnotificationcomment")
        );

        return model;
    }
}
