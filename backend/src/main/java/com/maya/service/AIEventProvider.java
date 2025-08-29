package com.maya.service;

import com.maya.model.Event;

import java.util.List;

public class AIEventProvider implements EventProvider {
    private final AIModel aiModel;

    private final EventMapper eventMapper;

    public AIEventProvider(AIModel aiModel, EventMapper eventMapper) {
        this.aiModel = aiModel;
        this.eventMapper = eventMapper;
    }

    public List<Event> fetchEvents(String q) {
        return eventMapper.map(aiModel.fetch(q));
    }
}
