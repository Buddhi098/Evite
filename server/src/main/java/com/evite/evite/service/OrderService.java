package com.evite.evite.service;

import com.evite.evite.dto.OrderDTO;
import com.evite.evite.model.Order;
import com.evite.evite.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class OrderService {

    @Autowired
    private final OrderRepository orderRepository;

    public String getHashValue(Double amount, String orderId) {
        String merahantID = "1227645";
        String merchantSecret = "MTQxMDk0MDE4NTE0NDgwMTE5MDcyMTQ2NDI2NDUxMjczMzQwMjUxMQ==";
        String currency = "LKR";
        DecimalFormat df = new DecimalFormat("0.00");
        String amountFormatted = df.format(amount);
        String hash = getMd5(merahantID + orderId + amountFormatted + currency + getMd5(merchantSecret));

        return hash;
    }

    public static String getMd5(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(input.getBytes());
            BigInteger no = new BigInteger(1, messageDigest);
            String hashtext = no.toString(16);
            while (hashtext.length() < 32) {
                hashtext = "0" + hashtext;
            }
            return hashtext.toUpperCase();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }


    public ResponseEntity<?> createOrder(OrderDTO orderDTO) {
        try {
            Order order = Order.builder()
                    .eventId(orderDTO.getEventId())
                    .email(orderDTO.getEmail())
                    .phone(orderDTO.getPhone())
                    .name(orderDTO.getName())
                    .status("pending")
                    .ticketCount(orderDTO.getTicketCount())
                    .totalPrice(orderDTO.getTotalPrice())
                    .address(orderDTO.getAddress())
                    .build();

            Order newOrder = orderRepository.save(order);
            String hashValue = getHashValue(orderDTO.getTotalPrice(), newOrder.getId());

            String merahantID = "1227645";

            DecimalFormat df = new DecimalFormat("0.00");
            String amountFormatted = df.format(orderDTO.getTotalPrice());

            Map<String, String> response = Map.of(
                    "orderId", newOrder.getId(),
                    "hash", hashValue,
                    "merchantID", merahantID,
                    "amount", amountFormatted
            );
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to create order");
        }
    }

    public ResponseEntity<?> notifyOrder(String orderId) {
        try {
            Order order = orderRepository.findById(orderId).orElse(null);
            if (order == null) {
                return ResponseEntity.badRequest().body("Order not found");
            }

            order.setStatus("completed");
            orderRepository.save(order);

            return ResponseEntity.ok("Order completed");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to notify order");
        }
    }
}
