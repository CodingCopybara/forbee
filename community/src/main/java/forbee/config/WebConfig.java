// src/main/java/forbee/config/WebConfig.java
package forbee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class WebConfig {
  @Bean
  public CorsFilter corsFilter() {
    CorsConfiguration config = new CorsConfiguration();
    config.addAllowedOrigin("*");               // 모든 출처 허용
    config.addAllowedHeader("*");               // 모든 헤더 허용 (Role, Content-Type 등)
    config.addAllowedMethod("*");               // 모든 메서드 허용 (GET, POST, OPTIONS…)
    config.setAllowCredentials(true);           // 필요 시 쿠키 포함

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    // /** 모든 경로에 대해 위 설정을 적용
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
  }
}
