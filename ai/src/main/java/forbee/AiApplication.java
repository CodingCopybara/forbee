package forbee;

// 임시 비활성화 - Kafka 의존성 제거로 인해
// import forbee.config.kafka.KafkaProcessor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
// import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
// @EnableBinding(KafkaProcessor.class)  // 임시 비활성화
@EnableFeignClients
public class AiApplication {

    public static ApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(AiApplication.class, args);
    }
}
