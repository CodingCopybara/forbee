package forbee.infra;

import forbee.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class PlantHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Plant>> {

    @Override
    public EntityModel<Plant> process(EntityModel<Plant> model) {
        return model;
    }
}
