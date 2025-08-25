package com.example.template.controller;

import lombok.Data;

@Data
public class UserProfileDto {
    private Long userIdentifier;
    private String username;
    private String name;
    private String phone;
}