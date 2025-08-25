package com.example.template.controller;

import com.example.template.entity.User;
import com.example.template.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

// import java.util.UUID; // userIdentifier 생성을 위해 추가 (이제 Long이므로 사용 안함)

@RestController
@RequestMapping("/oauth/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private final RestTemplate restTemplate = new RestTemplate(); // 추가
    @Value("${GW_URL}")
    private String gatewayUrl;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegistrationRequestDto registrationDto) {
        if (userRepository.findByUsername(registrationDto.getEmail()) != null) { // 변경
            return new ResponseEntity<>("Email already registered!", HttpStatus.BAD_REQUEST);
        }

        // userIdentifier가 제공되지 않으면 System.currentTimeMillis()로 자동 생성
        Long userIdentifier = registrationDto.getUserIdentifier();
        if (userIdentifier == null) {
            userIdentifier = System.currentTimeMillis();
        } else {
            // userIdentifier가 이미 존재하는지 확인 (선택 사항, 필요에 따라 추가)
            if (userRepository.findByUserIdentifier(userIdentifier) != null) {
                return new ResponseEntity<>("User identifier already exists!", HttpStatus.BAD_REQUEST);
            }
        }

        // 회원가입
        User newUser = new User();
        newUser.setUsername(registrationDto.getEmail());
        newUser.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        newUser.setUserIdentifier(userIdentifier);

        userRepository.save(newUser);

        // user 서비스에 사용자 프로필 정보 전송
        try {
            // user 서비스로 전송할 DTO 생성
            UserProfileDto userProfileDto = new UserProfileDto();
            userProfileDto.setUserIdentifier(newUser.getUserIdentifier());
            userProfileDto.setUsername(newUser.getUsername()); // username으로 사용
            userProfileDto.setName(registrationDto.getName()); // 이름 추가
            userProfileDto.setPhone(registrationDto.getPhone());

            // user 서비스의 /users/signup 엔드포인트로 POST 요청
            String userServiceUrl = gatewayUrl + "/users/signup"; // GW_URL 환경변수 사용
            restTemplate.postForEntity(userServiceUrl, userProfileDto, String.class);

        } catch (Exception e) {
            // user 서비스로의 전송 실패 시 처리 (로그 기록 등)
            e.printStackTrace();
            // 사용자 등록은 성공했으므로 201 응답을 유지하거나, 500 오류를 반환할 수 있습니다.
            // 여기서는 일단 201을 유지합니다.
        }

        return new ResponseEntity<>("User registered successfully with identifier: " + userIdentifier, HttpStatus.CREATED);
    }
}