package com.example.template.controller;

import lombok.Data;

@Data
public class RegistrationRequestDto {
    private String email;
    private String password;
    private Long userIdentifier; // Optional
    private String name; // New field for user's name
    private String phone;
}