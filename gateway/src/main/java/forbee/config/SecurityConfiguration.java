package forbee.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(
        ServerHttpSecurity http
    ) {
        http
            .cors()
            .and()
            .csrf()
            .disable()
            .authorizeExchange()
            .pathMatchers("/login/**", "/logout**", "/products/**", "/api/users/register", "/oauth/token")
            .permitAll()
            .anyExchange()
            .authenticated()
            .and()
            .oauth2ResourceServer() // Add this line
            .jwt(); // Add this line

        return http.build();
    }
}
