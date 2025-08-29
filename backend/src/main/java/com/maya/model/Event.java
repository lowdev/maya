package com.maya.model;

import java.time.ZonedDateTime;
import java.util.UUID;

public class Event {
    private String id = UUID.randomUUID().toString();
    private String title, description, shortDescription, imageUrl, location, timezone;
    private ZonedDateTime startDateTime, endDateTime;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String s) {
        title = s;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String s) {
        description = s;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String s) {
        shortDescription = s;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String s) {
        imageUrl = s;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String s) {
        location = s;
    }

    public ZonedDateTime getStartDateTime() {
        return startDateTime;
    }

    public void setStartDateTime(ZonedDateTime s) {
        startDateTime = s;
    }

    public ZonedDateTime getEndDateTime() {
        return endDateTime;
    }

    public void setEndDateTime(ZonedDateTime s) {
        endDateTime = s;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String s) {
        timezone = s;
    }
}
