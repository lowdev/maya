package com.maya.service;

import com.maya.model.Event;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class EventService {
    private final Map<String, Event> store = new ConcurrentHashMap<>();

    public List<Event> storeAll(List<Event> events) {
        for (Event e : events) store.put(e.getId(), e);
        return events;
    }

    public Optional<Event> get(String id) {
        return Optional.ofNullable(store.get(id));
    }
}
