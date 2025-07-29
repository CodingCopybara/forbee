package com.example.template.service;

import com.example.template.entity.User;
import com.example.template.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;

/**
 * Spring Security의 UserDetailsService 인터페이스 구현체.
 * 사용자 인증 시 데이터베이스에서 사용자 정보를 로드하는 역할을 합니다.
 * oauth 서비스는 이제 이름과 역할을 직접 관리하지 않으므로, 기본 권한을 부여합니다.
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 주어진 사용자 이름(여기서는 이메일)으로 사용자 정보를 로드합니다.
     * @param email 조회할 사용자의 이메일
     * @return UserDetails 객체
     * @throws UsernameNotFoundException 사용자를 찾을 수 없을 경우 발생
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        // oauth 서비스는 이제 역할을 직접 관리하지 않으므로, 기본적으로 ROLE_USER 권한을 부여합니다.
        // 실제 역할은 user 서비스에서 관리됩니다.
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
        );
    }
}