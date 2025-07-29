package com.example.template.controller;

import com.example.template.client.UserClient;
import com.example.template.entity.User;
import com.example.template.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

/**
 * 인증 및 사용자 관리를 위한 REST 컨트롤러.
 * 회원가입 기능을 제공합니다. 역할 변경은 user 서비스에서 담당합니다.
 */
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserClient userClient;

    public AuthController(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            UserClient userClient
    ) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userClient = userClient;
    }

    /**
     * 새로운 사용자를 등록하는 엔드포인트 (회원가입).
     * oauth 서비스는 이메일과 비밀번호만 저장하고, 이름과 역할은 user 서비스로 전달합니다.
     * @param request 회원가입 요청 데이터 (email, password, name, role)
     * @return 성공 시 201 Created, 실패 시 400 Bad Request
     */
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");
        String name = request.get("name"); // user 서비스로 전달하기 위해 파싱
        String roleString = request.get("role"); // user 서비스로 전달하기 위해 파싱

        if (email == null || password == null || name == null || roleString == null) {
            return new ResponseEntity<>("Missing required fields", HttpStatus.BAD_REQUEST);
        }

        if (userRepository.findByEmail(email).isPresent()) {
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password)); // 비밀번호 암호화

        User savedUser = userRepository.save(user);

        // user 서비스에 사용자 프로필 생성 요청
        userClient.createUserProfile(new UserClient.UserProfileRequest(
                savedUser.getId(),
                savedUser.getEmail(),
                name,
                roleString
        ));

        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
    }
}
