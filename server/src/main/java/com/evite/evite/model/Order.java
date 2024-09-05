package com.evite.evite.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "orders")
@Builder
public class Order {
    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private int ticketCount;
    private double totalPrice;
    private String status;
    private String eventId;
}
