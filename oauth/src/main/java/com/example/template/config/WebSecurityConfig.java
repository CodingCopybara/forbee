package com.example.template.config;

import com.example.template.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
            .ignoring()
            .antMatchers("/css/**")
            .antMatchers("/vendor/**")
            .antMatchers("/js/**")
            .antMatchers("/favicon*/**")
            .antMatchers("/img/**")
            .antMatchers("/.well-known/jwks.json");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
        throws Exception {
        auth
            .userDetailsService(userDetailsService)
            .passwordEncoder(passwordEncoder);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    /**
     * websecurity 부분에 핵심적인 endpoint 를 설정해 주는 부분이다.
     * 특정 uri 를 허락하고싶다면
     * .antMatchers("/login").permitAll() 등으로 사용이 가능하다.
     * 현재는 cors 의 preflight 부분만 허용하고 있다.
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors()
            .and()
            .authorizeRequests()
            .antMatchers("/auth/signup").permitAll() // 회원가입 엔드포인트 허용
            .antMatchers("/oauth2/authorize").permitAll() // OAuth2 인가 엔드포인트 허용
            .antMatchers("/oauth2/token").permitAll() // OAuth2 토큰 엔드포인트 허용
            .antMatchers("/login")
            .permitAll()
            .requestMatchers(CorsUtils::isPreFlightRequest)
            .permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .csrf()
            .disable();
    }

    /**
     * CORS 셋팅
     * 만약 gateway 를 통해서 oauth 서버를 접근한다면 삭제해 줘야함
     * @return
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*");
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
