package forbee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;
import forbee.config.kafka.KafkaProcessor;

@SpringBootApplication
@EnableBinding(KafkaProcessor.class)
public class AiMapApplication {

    public static void main(String[] args) {
        SpringApplication.run(AiMapApplication.class, args);
    }
}