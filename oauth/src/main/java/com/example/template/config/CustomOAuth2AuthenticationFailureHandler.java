package com.example.template.config;

import com.example.template.service.LoginAttemptService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Component
public class CustomOAuth2AuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private LoginAttemptService loginAttemptService;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType("application/json;charset=UTF-8");

        Map<String, Object> errorResponse = new HashMap<>();
        errorResponse.put("error", "unauthorized");

        String username = request.getParameter("username"); // Get username from request parameter

        if (exception instanceof LockedException) {
            errorResponse.put("error_description", exception.getMessage());
        } else if (exception instanceof BadCredentialsException) {
            errorResponse.put("error_description", "아이디 또는 비밀번호가 일치하지 않습니다.");
            if (username != null) {
                int attempts = loginAttemptService.getAttempts(username);
                int remainingAttempts = LoginAttemptService.MAX_ATTEMPT - attempts;
                if (remainingAttempts > 0) {
                    errorResponse.put("remaining_attempts", remainingAttempts);
                } else {
                    // This case should ideally be caught by LockedException, but as a fallback
                    errorResponse.put("error_description", "로그인 시도 횟수 초과로 계정이 잠겼습니다.");
                }
            }
        } else {
            errorResponse.put("error_description", "인증에 실패했습니다.");
        }

        objectMapper.writeValue(response.getWriter(), errorResponse);
    }
}
