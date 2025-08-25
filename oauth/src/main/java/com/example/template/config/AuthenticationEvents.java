package com.example.template.config;

import com.example.template.service.LoginAttemptService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AuthenticationFailureBadCredentialsEvent;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationEvents {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationEvents.class);

    @Autowired
    private LoginAttemptService loginAttemptService;

    @EventListener
    public void onFailure(AuthenticationFailureBadCredentialsEvent event) {
        Object principal = event.getAuthentication().getPrincipal();
        if (principal instanceof String) {
            String username = (String) principal;
            logger.warn("Login failed for user: {}. Increasing failure count.", username);
            loginAttemptService.loginFailed(username);
        }
    }

    @EventListener
    public void onSuccess(AuthenticationSuccessEvent event) {
        String username = event.getAuthentication().getName();
        if (username != null) {
            logger.info("Login successful for user: {}. Resetting failure count.", username);
            loginAttemptService.loginSucceeded(username);
        }
    }
}
