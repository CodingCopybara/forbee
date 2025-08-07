package forbee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
<<<<<<< HEAD:aiMap/src/main/java/forbee/AiMapApplication.java
import org.springframework.cloud.stream.annotation.EnableBinding;
import forbee.config.kafka.KafkaProcessor;

@SpringBootApplication
@EnableBinding(KafkaProcessor.class)
public class AiMapApplication {

    public static void main(String[] args) {
        SpringApplication.run(AiMapApplication.class, args);
=======

@SpringBootApplication
public class CommunityApplication {
    public static void main(String[] args) {
        SpringApplication.run(CommunityApplication.class, args);
>>>>>>> origin/feat/frontend/community:community/src/main/java/forbee/CommunityApplication.java
    }
}
