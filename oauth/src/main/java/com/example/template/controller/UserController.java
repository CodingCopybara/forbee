package com.example.template.controller;

import com.example.template.entity.User;
import com.example.template.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID; // userIdentifier 생성을 위해 추가

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User registrationUser) {
        if (userRepository.findByUsername(registrationUser.getUsername()) != null) {
            return new ResponseEntity<>("Email already registered!", HttpStatus.BAD_REQUEST);
        }

        // userIdentifier가 제공되지 않으면 UUID로 자동 생성
        String userIdentifier = registrationUser.getUserIdentifier();
        if (userIdentifier == null || userIdentifier.isEmpty()) {
            userIdentifier = UUID.randomUUID().toString();
        } else {
            // userIdentifier가 이미 존재하는지 확인 (선택 사항, 필요에 따라 추가)
            if (userRepository.findByUserIdentifier(userIdentifier) != null) {
                return new ResponseEntity<>("User identifier already exists!", HttpStatus.BAD_REQUEST);
            }
        }

        User newUser = new User();
        newUser.setUsername(registrationUser.getUsername());
        newUser.setPassword(passwordEncoder.encode(registrationUser.getPassword()));
        newUser.setUserIdentifier(userIdentifier); // userIdentifier 설정
        newUser.setRole("USER"); // 기본 역할 설정

        userRepository.save(newUser);

        // TODO: user 서비스에 나머지 사용자 정보(역할, 이름 등)를 저장하는 로직 추가
        // 예: userClient.createUserProfile(userIdentifier, registrationUser.getNickName(), registrationUser.getAddress(), registrationUser.getRole());

        return new ResponseEntity<>("User registered successfully with identifier: " + userIdentifier, HttpStatus.CREATED);
    }
}