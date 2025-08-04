package com.example.template;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebFluxSecurity
public class ResourceServerConfiguration {

    @Bean
    SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http)
        throws Exception {
        http
            .cors()
            .and()
            .csrf()
            .disable()
            .authorizeExchange()
<<<<<<<< HEAD:gateway/src/main/java/com/example/template/ResourceServerConfiguration.java
            .pathMatchers("/products/**", "/goods/**", "/oauth/**", "/login/**")
========
            .pathMatchers("/login/**", "/logout**", "/products/**", "/api/users/register", "/oauth/token")
>>>>>>>> feat/frontend/sign:gateway/src/main/java/forbee/config/SecurityConfiguration.java
            .permitAll()
            .anyExchange()
            .authenticated()
            .and()
<<<<<<<< HEAD:gateway/src/main/java/com/example/template/ResourceServerConfiguration.java
            .oauth2ResourceServer()
            .jwt();
========
            .oauth2ResourceServer() // Add this line
            .jwt(); // Add this line
>>>>>>>> feat/frontend/sign:gateway/src/main/java/forbee/config/SecurityConfiguration.java

        return http.build();
    }

    
}