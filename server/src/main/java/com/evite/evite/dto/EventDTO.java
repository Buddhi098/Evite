package com.evite.evite.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EventDTO {
    private String title;
    private String date;
    private String time;
    private String location;
    private String description;
    private String category;
    private String userId;
    private Double price;
}
