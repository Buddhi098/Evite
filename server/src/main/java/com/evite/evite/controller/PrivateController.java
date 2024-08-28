package com.evite.evite.controller;

import com.evite.evite.dto.EventDTO;
import com.evite.evite.service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class PrivateController {

    @Autowired
    private final EventService eventService;

    @PostMapping("/event/create")
    public ResponseEntity saveEvent(@RequestBody EventDTO eventDTO){
        return eventService.saveEvent(eventDTO);
    }
}
