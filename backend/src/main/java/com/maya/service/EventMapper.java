package com.maya.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.maya.model.Event;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

public class EventMapper {
    private final ObjectMapper mapper = new ObjectMapper().registerModule(new JavaTimeModule());

    public List<Event> map(String jsonAsString) {
        JsonNode json = null;
        try {
            json = mapper.readTree(jsonAsString);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

        List<Event> out = new ArrayList<>();
        if (json.has("events")) {
            for (JsonNode n : json.get("events")) {
                Event e = new Event();
                e.setTitle(n.path("title").asText());
                e.setShortDescription(n.path("shortDescription").asText());
                e.setDescription(n.path("description").asText());
                e.setImageUrl(n.path("imageUrl").asText(null));
                e.setLocation(n.path("location").asText(null));
                if (n.hasNonNull("startDateTime"))
                    e.setStartDateTime(ZonedDateTime.parse(n.get("startDateTime").asText()));
                if (n.hasNonNull("endDateTime"))
                    e.setEndDateTime(ZonedDateTime.parse(n.get("endDateTime").asText()));
                out.add(e);
            }
        }
        return out;
    }
}
