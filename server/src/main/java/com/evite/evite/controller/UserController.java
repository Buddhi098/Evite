package com.evite.evite.controller;

import com.evite.evite.dto.LoginRequestDTO;
import com.evite.evite.dto.OrderDTO;
import com.evite.evite.dto.UserRegistrationDTO;
import com.evite.evite.service.EventService;
import com.evite.evite.service.OrderService;
import com.evite.evite.service.UserService;
import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/public/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private final EventService eventService;

    @Autowired
    private final OrderService orderService;


    @PostMapping("/register")
    public ResponseEntity<?> registerBusiness(
            @ModelAttribute UserRegistrationDTO userRegistrationDTO) throws IOException {

        return userService.registerUser(userRegistrationDTO);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return userService.verify(loginRequestDTO);
    }

    @GetMapping("/events")
    public ResponseEntity<?> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("get_event_by_id/{id}")
    public ResponseEntity<?> getEventById(@PathVariable String id){
        return eventService.getEventById(id);
    }

    @GetMapping("/events/{eventId}/{imageName}")
    public ResponseEntity<Resource> getImage(
            @PathVariable String eventId,
            @PathVariable String imageName) {
        try {
            Path imagePath = Paths.get("file-storage", "events", eventId, imageName);
            Resource imageResource = (Resource) new UrlResource(imagePath.toUri());

            if (imageResource.exists() && imageResource.isReadable()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG) // or other media type depending on the file
                        .body((org.springframework.core.io.Resource) imageResource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/create_order")
    public ResponseEntity<?> createOrder(@RequestBody OrderDTO orderDTO){
        return orderService.createOrder(orderDTO);
    }

    @GetMapping("/notify_order/{orderId}")
    public ResponseEntity<?> notifyOrder(@PathVariable String orderId){
        return orderService.notifyOrder(orderId);
    }
}
