package com.maya.controller;

import com.maya.model.Event;
import com.maya.service.EventService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/calendar")
@CrossOrigin(origins = "*")
public class CalendarController {
    private final EventService store;

    public CalendarController(EventService s) {
        store = s;
    }

    @GetMapping("/ics/{id}")
    public ResponseEntity<byte[]> ics(@PathVariable String id) {
        Event e = store.get(id).orElseThrow(() -> new RuntimeException("Event not found"));
        String ics = generateIcs(e);
        byte[] bytes = ics.getBytes(StandardCharsets.UTF_8);
        HttpHeaders h = new HttpHeaders();
        h.setContentType(MediaType.parseMediaType("text/calendar; charset=utf-8"));
        h.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + safe(e.getTitle()) + ".ics\"");
        return new ResponseEntity<>(bytes, h, HttpStatus.OK);
    }

    @GetMapping("/google-url/{id}")
    public String googleUrl(@PathVariable String id) {
        Event e = store.get(id).orElseThrow(() -> new RuntimeException("Event not found"));
        String base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyyMMdd'T'HHmmss'Z'");
        String text = "&text=" + enc(e.getTitle());
        String details = "&details=" + enc(e.getDescription() == null ? "" : e.getDescription());
        String loc = "&location=" + enc(e.getLocation() == null ? "" : e.getLocation());
        String dates = "";
        if (e.getStartDateTime() != null) {
            String s = fmt.format(e.getStartDateTime().toInstant().atZone(java.time.ZoneOffset.UTC));
            String en = fmt.format((e.getEndDateTime() != null ? e.getEndDateTime() : e.getStartDateTime().plusHours(2)).toInstant().atZone(java.time.ZoneOffset.UTC));
            dates = "&dates=" + s + "/" + en;
        }
        return base + text + details + loc + dates;
    }

    private String enc(String s) {
        return URLEncoder.encode(s, StandardCharsets.UTF_8);
    }

    private String safe(String s) {
        return s.replaceAll("[^a-zA-Z0-9_\\-]", "_");
    }

    private String generateIcs(Event e) {
        String uid = e.getId() + "@maya";
        String s = e.getStartDateTime() != null ? e.getStartDateTime().toInstant().toString().replaceAll("[-:]", "").replace(".000", "") : "";
        String en = e.getEndDateTime() != null ? e.getEndDateTime().toInstant().toString().replaceAll("[-:]", "").replace(".000", "") : "";
        StringBuilder sb = new StringBuilder();
        sb.append("BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Maya//EN\nBEGIN:VEVENT\n");
        sb.append("UID:").append(uid).append("\n");
        if (!s.isEmpty()) sb.append("DTSTART:").append(s).append("\n");
        if (!en.isEmpty()) sb.append("DTEND:").append(en).append("\n");
        sb.append("SUMMARY:").append(e.getTitle()).append("\n");
        if (e.getLocation() != null) sb.append("LOCATION:").append(e.getLocation()).append("\n");
        if (e.getDescription() != null)
            sb.append("DESCRIPTION:").append(e.getDescription().replace("\n", " ").replace("\r", " ")).append("\n");
        sb.append("END:VEVENT\nEND:VCALENDAR\n");
        return sb.toString();
    }
}
