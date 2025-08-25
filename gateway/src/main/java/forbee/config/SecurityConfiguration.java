package forbee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.http.HttpMethod; // Add this import

import java.util.Arrays;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http
            .cors().configurationSource(corsConfigurationSource()).and() // CORS 설정 적용
            .csrf().disable()
            .authorizeExchange()
            .pathMatchers(
                "/oauth/**",      // oauth 관련 모든 경로 허용
                "/files/**",      // 파일 업로드 경로 허용
                "/chatbot/**",
                "/chatbot/chat",
                "/api/health",       
                "/users/**",
                "/posts/**",
                "/comments/**",
                "/ai/**",
                "/actuator/**",
                // Frontend specific paths
                "/",              // Root path for frontend
                "/login",
                "/login/**",
                "/admin",
                "/admin/**",
                "/area-analysis",
                "/area-analysis/**",
                "/bloom-prediction",
                "/bloom-prediction/**",
                "/chat",
                "/chat/**",
                "/community",
                "/community/**",
                "/membership-application",
                "/membership-application/**",
                "/mypage",
                "/mypage/**",
                "/nectar-support",
                "/nectar-support/**",
                "/pest-detection",
                "/pest-detection/**",
                "/_next/**",      // Next.js internal assets
                "/favicon.ico",   // Favicon
                "/assets/**"      // Custom assets if any
            )
            .permitAll()
            .anyExchange()
            .authenticated()
            .and()
            .oauth2ResourceServer()
            .jwt();

        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
