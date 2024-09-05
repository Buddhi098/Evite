package com.evite.evite.service;


import com.evite.evite.config.WebSecurityConfig;
import com.evite.evite.dto.LoginRequestDTO;
import com.evite.evite.dto.UserRegistrationDTO;
import com.evite.evite.model.User;
import com.evite.evite.model.UserPrincipal;
import com.evite.evite.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.schema.MongoJsonSchema;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Assuming you have a method to upload a file and return its URL
    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    private WebSecurityConfig webSecurityConfig;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    JWTService jwtService;

    public UserService() throws IOException {
    }

    public ResponseEntity registerUser(UserRegistrationDTO userRegistrationDTO) throws IOException {

        MultipartFile file = userRegistrationDTO.getBusinessLicense();
        String fileUrl = "";
        if (file != null && !file.isEmpty()) {
            fileUrl = fileStorageService.storeFile(file);
        }

        if (userRepository.existsByEmail(userRegistrationDTO.getEmail())) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "fail");
            response.put("error", "Email is already registered");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }


        String hashedPassword = webSecurityConfig.passwordEncoder().encode(userRegistrationDTO.getPassword());

        try {
            User user = User.builder()
                    .fullName(userRegistrationDTO.getFullName())
                    .email(userRegistrationDTO.getEmail())
                    .phoneNumber(userRegistrationDTO.getPhoneNumber())
                    .password(hashedPassword)
                    .companyName(userRegistrationDTO.getCompanyName())
                    .website(userRegistrationDTO.getWebsite())
                    .businessAddress(userRegistrationDTO.getBusinessAddress())
                    .registrationNumber(userRegistrationDTO.getRegistrationNumber())
                    .businessRegistrationDate(userRegistrationDTO.getBusinessRegistrationDate())
                    .businessTextData(userRegistrationDTO.getBusinessTextData())
                    .businessLicenseUrl(fileUrl)
                    .paypalEmail(userRegistrationDTO.getPaypalEmail())
                    .billingAddress(userRegistrationDTO.getBillingAddress())
                    .paypalAccountName(userRegistrationDTO.getPaypalAccountName())
                    .build();

            User userResponse = userRepository.save(user);
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("error", "User Created Successfully");
            return ResponseEntity.status(HttpStatus.OK).body(response);

        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "fail");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    public ResponseEntity verify(LoginRequestDTO user) {
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        User userData = userRepository.findByEmail(user.getEmail());
        if (authentication.isAuthenticated()) {
            String access_token = jwtService.generateToken(user.getEmail());
            Map<String, String> response = new HashMap<>();
            response.put("id" , userData.getId());
            response.put("login_status", "success");
            response.put("access_token", access_token);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("login_status", "fail");
            response.put("access_token", null);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }
}
