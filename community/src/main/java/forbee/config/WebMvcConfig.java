package forbee.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.nio.file.Paths;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${app.upload.base-dir:uploads}")
    private String baseDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // /files/** → 로컬 {baseDir}/** 파일 서빙
        String abs = Paths.get(baseDir).toAbsolutePath().normalize().toString();
        // 끝에 슬래시 필수
        String location = "file:" + (abs.endsWith("/") ? abs : abs + "/");
        registry
                .addResourceHandler("/files/**")
                .addResourceLocations(location)
                .setCachePeriod(3600);
    }
}
