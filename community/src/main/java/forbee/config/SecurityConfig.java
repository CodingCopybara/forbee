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
            .csrf().disable() // CSRF 비활성화 (API 서비스이므로)
            .authorizeRequests()
                .antMatchers().permitAll() // 회원가입 후 프로필 생성 엔드포인트 및 /users/** 허용
                .anyRequest().authenticated(); // 그 외 모든 요청은 인증 필요
    }
}