package forbee.infra;

import forbee.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class MemberRequestListHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<MemberRequestList>> {

    @Override
    public EntityModel<MemberRequestList> process(
        EntityModel<MemberRequestList> model
    ) {
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() +
                    "/upgradetomemberrequest"
                )
                .withRel("upgradetomemberrequest")
        );
        model.add(
            Link
                .of(
                    model.getRequiredLink("self").getHref() + "/requestapproval"
                )
                .withRel("requestapproval")
        );
        model.add(
            Link
                .of(model.getRequiredLink("self").getHref() + "/requestdeny")
                .withRel("requestdeny")
        );

        return model;
    }
}
