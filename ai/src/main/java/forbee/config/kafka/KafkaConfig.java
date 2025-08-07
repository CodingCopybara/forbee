package forbee.config.kafka;

import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("docker")
@EnableBinding(KafkaProcessor.class)
public class KafkaConfig {
    // docker 프로파일에서만 Kafka Binding 활성화
}
