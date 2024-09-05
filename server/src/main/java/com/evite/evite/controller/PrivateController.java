package com.evite.evite.controller;

import com.evite.evite.dto.EventDTO;
import com.evite.evite.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class PrivateController {

    @Autowired
    private final EventService eventService;

    @PostMapping("/event/create")
    public ResponseEntity saveEvent(@ModelAttribute EventDTO eventDTO,
                                    @RequestParam("images") MultipartFile[] images) {
        return eventService.saveEvent(eventDTO , images);
    }
}
