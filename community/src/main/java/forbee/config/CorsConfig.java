package forbee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // 모든 URL
                    .allowedOrigins("http://localhost:8080") // Vue 개발 서버 주소
                    .allowedMethods("*") // GET, POST, PUT, DELETE 등 모두 허용
                    .allowedHeaders("*")
                    .allowCredentials(true);
            }
        };
    }
}
