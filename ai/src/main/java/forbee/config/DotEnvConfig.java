package forbee.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;

@Configuration
public class DotEnvConfig {

    @PostConstruct
    public void loadDotEnv() {
        try {
            // .env 파일을 프로젝트 루트에서 찾기
            Dotenv dotenv = Dotenv.configure()
                    .ignoreIfMissing() // .env 파일이 없어도 에러 안남
                    .load();
            
            // 환경변수로 시스템 프로퍼티에 설정
            dotenv.entries().forEach(entry -> {
                System.setProperty(entry.getKey(), entry.getValue());
            });
            
            System.out.println("[INFO] .env 파일이 로드되었습니다.");
        } catch (Exception e) {
            System.out.println("[WARN] .env 파일 로드 실패: " + e.getMessage());
        }
    }
}