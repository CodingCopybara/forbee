package forbee;

import forbee.config.kafka.KafkaProcessor;  // AKS 빌드 시 주석 처리 했음
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.stream.annotation.EnableBinding;  // AKS 빌드 시 주석 처리 했음
import org.springframework.context.ApplicationContext;

@SpringBootApplication
@EnableBinding(KafkaProcessor.class)  // AKS 빌드 시 주석 처리 했음
@EnableFeignClients
public class AiApplication {

    public static ApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(AiApplication.class, args);
    }
}
