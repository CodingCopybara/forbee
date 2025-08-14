// /workspace/forbee/community/src/main/java/forbee/config/StaticResourceConfig.java
package forbee.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // /files/** → 파일 시스템 {spring.app.upload.base-dir}/** 로 매핑
        registry.addResourceHandler("/files/**")
                .addResourceLocations("file:" + System.getProperty("user.dir") + "/uploads/");
        // 위 경로는 기본값 uploads/ 기준.
        // base-dir을 절대경로로 쓰면: addResourceLocations("file:/절대/경로/...");
    }
}
