package com.example.template.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * user 서비스의 API를 호출하기 위한 Feign 클라이언트 인터페이스.
 * user 서비스의 사용자 프로필 생성 API를 호출하는 데 사용됩니다.
 * name: 호출할 서비스의 이름 (Eureka 등 서비스 디스커버리 사용 시)
 * url: 서비스 디스커버리를 사용하지 않을 경우 직접 URL 지정
 */
@FeignClient(name = "user-service", url = "http://localhost:8080") // user 서비스의 URL에 맞게 변경 필요
public interface UserClient {

    /**
     * user 서비스에 새로운 사용자 프로필을 생성하도록 요청합니다.
     * @param userProfileRequest 사용자 프로필 생성 요청 DTO
     */
    @PostMapping("/users")
    void createUserProfile(@RequestBody UserProfileRequest userProfileRequest);

    // 내부적으로 사용할 DTO 클래스 정의
    class UserProfileRequest {
        private Long id;
        private String email;
        private String name;
        private String role;

        public UserProfileRequest(Long id, String email, String name, String role) {
            this.id = id;
            this.email = email;
            this.name = name;
            this.role = role;
        }

        public Long getId() {
            return id;
        }

        public String getEmail() {
            return email;
        }

        public String getName() {
            return name;
        }

        public String getRole() {
            return role;
        }
    }
}
