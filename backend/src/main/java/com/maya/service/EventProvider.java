package com.maya.service;

import com.maya.model.Event;

import java.util.List;

public interface EventProvider {
    List<Event> fetchEvents(String q);
}
