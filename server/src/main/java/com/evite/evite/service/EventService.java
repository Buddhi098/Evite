package com.evite.evite.service;

import com.evite.evite.dto.EventDTO;
import com.evite.evite.model.Event;
import com.evite.evite.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EventService {
    private final EventRepository eventRepository;

    public ResponseEntity saveEvent(EventDTO eventDTO) {

        try{
            Event event = Event.builder()
                    .title(eventDTO.getTitle())
                    .date(eventDTO.getDate())
                    .time(eventDTO.getTime())
                    .location(eventDTO.getLocation())
                    .description(eventDTO.getDescription())
                    .category(eventDTO.getCategory())
                    .userId(eventDTO.getUserId())
                    .build();
            Event newEvent = eventRepository.save(event);

            if(newEvent != null){
                Map<String , String> response= new HashMap<>();
                response.put("status" , "success");
                response.put("title" , eventDTO.getTitle());

                return ResponseEntity.status(HttpStatus.CREATED).body(response);
            }

        }catch (DataAccessException e){
            Map<String , String> response= new HashMap<>();
            response.put("status" , "fail");
            response.put("error" , e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }catch (Exception e){
            Map<String , String> response= new HashMap<>();
            response.put("status" , "fail");
            response.put("error" , e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        return null;
    }
}
