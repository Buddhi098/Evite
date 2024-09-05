package com.evite.evite.dto;

import lombok.Builder;
import lombok.Data;
@Data
@Builder
public class OrderDTO {
    private String name;
    private String email;
    private String phone;
    private String address;
    private int ticketCount;
    private double totalPrice;
    private String eventId;
}
