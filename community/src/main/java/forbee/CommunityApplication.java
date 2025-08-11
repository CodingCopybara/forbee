// /workspace/forbee/community/src/main/java/forbee/CommunityApplication.java
package forbee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "forbee") // ★ 중요: forbee.web/infra 모두 스캔
public class CommunityApplication {
  public static void main(String[] args) {
    SpringApplication.run(CommunityApplication.class, args);
  }
}
