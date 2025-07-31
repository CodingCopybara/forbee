package forbee.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            // Postman, httpie 등 외부 도구에서의 POST/PUT 요청을 위해 CSRF 비활성화
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("/ai/**", "/ws/**").permitAll()
                // 그 외의 모든 요청은 인증을 요구함
                .anyRequest().authenticated()
            .and()
            // 다른 엔드포인트를 위해 JWT 기반 인증은 계속 활성화
            .oauth2ResourceServer(oauth2 -> oauth2.jwt());
    }
}
