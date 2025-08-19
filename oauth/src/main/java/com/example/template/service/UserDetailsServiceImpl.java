package com.example.template.service;

import com.example.template.entity.User;
import com.example.template.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoginAttemptService loginAttemptService;

    @Autowired
    private HttpServletRequest request;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (loginAttemptService.isBlocked(username)) {
            throw new LockedException("해당 계정은 잦은 로그인 실패로 인해 잠겼습니다.");
        }

        User user = userRepository.findByUsername(username);
        if (user == null) {
            // 실패 시 실제 계정이 있는지 여부를 노출하지 않기 위해 AuthenticationFailureBadCredentialsEvent를 발생시킴
            // 하지만 여기서는 UsernameNotFoundException을 던져야 UserDetailsService 명세에 맞음
            // 실제 실패 이벤트 처리는 AuthenticationEvents에서 담당
            throw new UsernameNotFoundException("사용자를 찾을 수 없거나 비밀번호가 틀렸습니다.");
        }
        return user;
    }
}
