package com.evite.evite.service;

import com.evite.evite.dto.EventDTO;
import com.evite.evite.dto.GetEventDto;
import com.evite.evite.model.Event;
import com.evite.evite.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    private final FileStorageService fileStorageService;

    public ResponseEntity saveEvent(EventDTO eventDTO, MultipartFile[] images) {

        try {
            Event event = Event.builder()
                    .title(eventDTO.getTitle())
                    .date(eventDTO.getDate())
                    .time(eventDTO.getTime())
                    .location(eventDTO.getLocation())
                    .description(eventDTO.getDescription())
                    .category(eventDTO.getCategory())
                    .userId(eventDTO.getUserId())
                    .price(eventDTO.getPrice())
                    .build();
            Event newEvent = eventRepository.save(event);

            String eventId = newEvent.getId();

            List<String> imagesUrls = fileStorageService.storeEventImages(eventId, Arrays.asList(images));


            if (newEvent != null) {
                Map<String, String> response = new HashMap<>();
                response.put("status", "success");
                response.put("title", eventDTO.getTitle());

                return ResponseEntity.status(HttpStatus.CREATED).body(response);
            }

        } catch (DataAccessException e) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "fail");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "fail");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        return null;
    }

    public ResponseEntity<?> getAllEvents() {
        try {

            List<Event> events = eventRepository.findAll();

            Collections.reverse(events);

            List<GetEventDto> eventDtos = events.stream().map(event -> {
                GetEventDto dto = GetEventDto.builder()
                        .title(event.getTitle())
                        .date(event.getDate())
                        .time(event.getTime())
                        .location(event.getLocation())
                        .description(event.getDescription())
                        .category(event.getCategory())
                        .userId(event.getUserId())
                        .id(event.getId())
                        .build();

                // Adding image URLs
                List<String> imageUrls = new ArrayList<>();
                Path eventImagesPath = Paths.get("file-storage", "events", event.getId());

                if (Files.exists(eventImagesPath) && Files.isDirectory(eventImagesPath)) {
                    try {
                        Files.list(eventImagesPath).forEach(path -> {
                            String fileName = path.getFileName().toString();
                            String eventId = event.getId();
                            imageUrls.add("http://localhost:9090/public/user/events/" + eventId + "/" + fileName);
                        });
                    } catch (IOException e) {
                        // Handle exception if needed
                        e.printStackTrace();
                    }
                }

                dto.setImageUrls(imageUrls);

                return dto;
            }).toList();

            return ResponseEntity.status(HttpStatus.OK).body(eventDtos);

        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("status", "fail");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    public ResponseEntity<?> getEventById(String id) {

        try{
            Optional<Event> event = eventRepository.findById(id);

            if(event.isPresent()){
                GetEventDto dto = GetEventDto.builder()
                        .title(event.get().getTitle())
                        .date(event.get().getDate())
                        .time(event.get().getTime())
                        .location(event.get().getLocation())
                        .description(event.get().getDescription())
                        .category(event.get().getCategory())
                        .userId(event.get().getUserId())
                        .id(event.get().getId())
                        .price(event.get().getPrice())
                        .build();

                // Adding image URLs
                List<String> imageUrls = new ArrayList<>();
                Path eventImagesPath = Paths.get("file-storage", "events", event.get().getId());

                if (Files.exists(eventImagesPath) && Files.isDirectory(eventImagesPath)) {
                    try {
                        Files.list(eventImagesPath).forEach(path -> {
                            String fileName = path.getFileName().toString();
                            String eventId = event.get().getId();
                            imageUrls.add("http://localhost:9090/public/user/events/" + eventId + "/" + fileName);
                        });
                    } catch (IOException e) {
                        // Handle exception if needed
                        e.printStackTrace();
                    }
                }

                dto.setImageUrls(imageUrls);

                return ResponseEntity.status(HttpStatus.OK).body(dto);
            }else{
                Map<String, String> response = new HashMap<>();
                response.put("status", "fail");
                response.put("error", "Event not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        }catch (Exception e){
            Map<String, String> response = new HashMap<>();
            response.put("status", "fail");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }
}
