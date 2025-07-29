package forbee.infra;

import forbee.domain.*;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

@Component
public class ChatbotHateoasProcessor
    implements RepresentationModelProcessor<EntityModel<Chatbot>> {

    @Override
    public EntityModel<Chatbot> process(EntityModel<Chatbot> model) {
        return model;
    }
}
