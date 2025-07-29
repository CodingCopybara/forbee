package com.example.template.repository;

import com.example.template.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * User 엔티티에 대한 데이터베이스 접근을 위한 Spring Data JPA 리포지토리.
 * 이메일을 통해 사용자를 조회하는 기능을 제공합니다.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    /**
     * 주어진 이메일을 가진 사용자를 조회합니다.
     * @param email 조회할 사용자의 이메일
     * @return 해당 이메일을 가진 User 객체를 Optional로 반환
     */
    Optional<User> findByEmail(String email);
}