package forbee.config;

import forbee.domain.AgentResponse;
import forbee.domain.AgentResultStore;
import forbee.domain.AgentResultStream;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AgentConfig {

    @Bean
    public AgentResultStream<AgentResponse> agentResultStream() {
        return new AgentResultStream<>();
    }

    @Bean
    public AgentResultStore<AgentResponse> agentResultStore() {
        return new AgentResultStore<>();
    }
}
