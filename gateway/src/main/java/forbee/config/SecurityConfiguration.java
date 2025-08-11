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
            .csrf().disable()
            .authorizeExchange()
            .pathMatchers("/login/**", "/logout**", "/products/**", "/api/users/register", "/oauth/token", "/users/**", "/posts/**", "/comments/**", "/chatbot_ai/**", "/chat/**")
            .permitAll()
            .anyExchange()
            .authenticated()
            .and()
            .oauth2ResourceServer()
            .jwt();

        return http.build();
    }
}