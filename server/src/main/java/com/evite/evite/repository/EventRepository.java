package com.evite.evite.repository;

import com.evite.evite.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface EventRepository extends MongoRepository<Event, String> {

    Optional<Event> findById(String id);
}
