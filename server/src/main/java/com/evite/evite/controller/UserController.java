package com.evite.evite.controller;

import com.evite.evite.dto.LoginRequestDTO;
import com.evite.evite.dto.UserRegistrationDTO;
import com.evite.evite.service.UserService;
import jakarta.annotation.Nullable;
import org.springframework.stereotype.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/public/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity registerBusiness(
            @ModelAttribute UserRegistrationDTO userRegistrationDTO) throws IOException {

        return userService.registerUser(userRegistrationDTO);
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return userService.verify(loginRequestDTO);
    }
}
