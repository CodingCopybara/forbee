package forbee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.cors.CorsConfiguration; // import 추가
import org.springframework.web.cors.reactive.CorsConfigurationSource; // import 추가
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource; // import 추가
import java.util.Arrays; // import 추가

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(
        ServerHttpSecurity http
    ) {
        http
            .cors().and() // CORS 활성화
            .csrf().disable()
            .authorizeExchange()
            .pathMatchers("/login/**", "/logout**", "/products/**", "/api/users/register", "/oauth/token", "/users/**") // /users/** 경로 추가
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
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:8080", "https://8080-dlafhr789-forbee-hagbxtfzmyl.ws-us120.gitpod.io")); // 프론트엔드 Origin 추가
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}