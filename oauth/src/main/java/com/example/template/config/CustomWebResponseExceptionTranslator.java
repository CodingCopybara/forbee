package com.example.template.config;

import com.example.template.service.LoginAttemptService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.common.exceptions.OAuth2Exception;
import org.springframework.security.oauth2.provider.error.WebResponseExceptionTranslator;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class CustomWebResponseExceptionTranslator implements WebResponseExceptionTranslator<OAuth2Exception> {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private LoginAttemptService loginAttemptService;

    @Override
    public ResponseEntity<OAuth2Exception> translate(Exception e) throws Exception {
        Throwable cause = e.getCause();

        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("error", "invalid_grant");

        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String username = request.getParameter("username");

        if (cause instanceof LockedException) {
            errorMap.put("error_description", cause.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new OAuth2Exception(objectMapper.writeValueAsString(errorMap)));
        } else if (cause instanceof BadCredentialsException) {
            errorMap.put("error_description", "아이디 또는 비밀번호가 일치하지 않습니다.");
            if (username != null) {
                int attempts = loginAttemptService.getAttempts(username);
                int remainingAttempts = LoginAttemptService.MAX_ATTEMPT - attempts;
                if (remainingAttempts > 0) {
                    errorMap.put("remaining_attempts", String.valueOf(remainingAttempts));
                } else {
                    errorMap.put("error_description", "로그인 시도 횟수 초과로 계정이 잠겼습니다.");
                }
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new OAuth2Exception(objectMapper.writeValueAsString(errorMap)));
        }

        // Default handling for other exceptions
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new OAuth2Exception("Internal Server Error"));
    }
}
