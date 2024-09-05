package com.evite.evite.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class GetEventDto {
    private String id;
    private String title;
    private String date;
    private String time;
    private String location;
    private String description;
    private String category;
    private String userId;
    private Double price;
    private List<String> imageUrls;
}
