package forbee.infra;

import forbee.domain.Chatbot;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelProcessor;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.*;

@Component
public class ChatbotHateoasProcessor implements RepresentationModelProcessor<EntityModel<Chatbot>> {

    @Override
    public EntityModel<Chatbot> process(EntityModel<Chatbot> model) {
        // ChatbotController.stream(String authorization, ChatRequest req)
        model.add(
            linkTo(
                methodOn(ChatbotController.class)
                    .stream(null, new ChatbotController.ChatRequest())
            ).withRel("stream")
        );
        return model;
    }
}