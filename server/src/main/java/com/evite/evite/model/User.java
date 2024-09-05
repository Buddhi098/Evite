package com.evite.evite.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
@Data
@Builder
public class User {
    @Id
    private String id; // MongoDB will generate this id
    private String fullName;
    private String email;
    private String phoneNumber;
    private String password;
    private String companyName;
    private String website;
    private String businessAddress;
    private String registrationNumber;
    private String businessRegistrationDate;
    private String businessTextData;
    private String businessLicenseUrl; // Assuming file storage returns a URL
    private String paypalEmail;
    private String billingAddress;
    private String paypalAccountName;

    // Getters and Setters
}

