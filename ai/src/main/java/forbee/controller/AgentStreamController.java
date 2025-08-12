package forbee.controller;

import forbee.domain.AgentResponse;
import forbee.domain.AgentResultStore;
import forbee.domain.AgentResultStream;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/ai")
public class AgentStreamController {

    private final AgentResultStream<AgentResponse> stream;
    private final AgentResultStore<AgentResponse> store;

    public AgentStreamController(AgentResultStream<AgentResponse> stream,
                                 AgentResultStore<AgentResponse> store) {
        this.stream = stream;
        this.store = store;
    }

    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent<AgentResponse>> stream(@RequestParam String userId) {
        // EmitterProcessor<T> 자체가 Flux<T>라서 asFlux() 불필요
        return stream.getSink(userId)
                .map(data -> ServerSentEvent.builder(data).event("agent").build());
    }

    @GetMapping("/result")
    public ResponseEntity<AgentResponse> latest(@RequestParam String userId) {
        AgentResponse json = store.get(userId);
        return (json == null) ? ResponseEntity.noContent().build() : ResponseEntity.ok(json);
    }
}
