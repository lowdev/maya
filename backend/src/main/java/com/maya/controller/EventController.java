package com.maya.controller;

import com.maya.model.Event;
import com.maya.model.SearchRequest;
import com.maya.service.AIEventProvider;
import com.maya.service.EventProvider;
import com.maya.service.EventService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "*")
public class EventController {
    private final EventProvider provider;
    private final EventService store;

    public EventController(EventProvider p, EventService s) {
        provider = p;
        store = s;
    }

    @PostMapping(value = "/search", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Event> search(@RequestBody SearchRequest req) {
        List<Event> events = provider.fetchEvents(req.getQuery());
        return store.storeAll(events);
    }

    @GetMapping("/{id}")
    public Event get(@PathVariable String id) {
        return store.get(id).orElseThrow(() -> new RuntimeException("Event not found"));
    }
}
