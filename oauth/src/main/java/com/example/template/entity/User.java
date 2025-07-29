package com.example.template.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import javax.persistence.*;

/**
 * 사용자 정보를 저장하는 JPA 엔티티 클래스.
 * 이 엔티티는 인증 서버(oauth 서비스)에서 사용자의 자격 증명만 관리합니다.
 * 이름과 역할은 user 서비스에서 관리됩니다.
 */
@Entity
@Table(name = "users") // 'user'는 SQL 예약어일 수 있으므로 'users'로 변경
@Data // Lombok: Getter, Setter, toString, equals, hashCode 자동 생성
@NoArgsConstructor // Lombok: 기본 생성자 자동 생성
@AllArgsConstructor // Lombok: 모든 필드를 인자로 받는 생성자 자동 생성
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // ID 자동 생성 전략
    private Long id; // 사용자 고유 식별자 (userId)

    @Column(unique = true, nullable = false) // 이메일은 고유하고 필수 값
    private String email;

    @Column(nullable = false) // 비밀번호는 필수 값
    private String password;
}