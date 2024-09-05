package com.evite.evite.dto;

import jakarta.annotation.Nullable;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class UserRegistrationDTO {
    private String fullName;
    private String email;
    private String phoneNumber;
    private String password;
    private String confirmPassword;
    private String companyName;
    private String website;
    private String businessAddress;
    private String registrationNumber;
    private MultipartFile businessLicense;
    private String businessRegistrationDate;
    private String businessTextData;
    private String paypalEmail;
    private String billingAddress;
    private String paypalAccountName;

    // Getters and Setters
}
