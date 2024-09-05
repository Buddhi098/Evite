package com.evite.evite.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "events")
public class Event {
    @Id
    private String id;
    private String title;
    private String date;
    private String time;
    private String location;
    private String description;
    private String category;
    private String userId;
    private Double price;
}

