package com.maya.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.maya.model.Event;
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import com.openai.models.ChatModel;
import com.openai.models.chat.completions.ChatCompletion;
import com.openai.models.chat.completions.ChatCompletionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ChatGptEventProvider {
    private final WebClient web = WebClient.builder().build();
    private final ObjectMapper mapper = new ObjectMapper().registerModule(new JavaTimeModule());
    @Value("${openai.api.key:}")
    private String apiKey;
    @Value("${openai.api.url}")
    private String apiUrl;
    @Value("${openai.model:gpt-5}")
    private String model;

    public List<Event> fetchEvents(String q) {
        try {
            if (!StringUtils.hasText(apiKey)) {
                return fallback(q);
            }

            String system = "You are an events finder. Respond with STRICT JSON only: {\"events\":[...]} up to 30 items. Each item: title, shortDescription, description, imageUrl, location, startDateTime (ISO 8601 with timezone), endDateTime (optional).";
            String user = "Query: " + q;
            String body = "{\" model \":\" " + model + " \",\" messages \":[{\" role \":\" system \",\" content \":\" " + system + " \"},{\"role \":\" user \",\" content \":\" " + user + " \"}]}";
            JsonNode resp = web.post()
                    .uri(apiUrl)
                    .header("Authorization", "Bearer " + apiKey)
                    .contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
                    .bodyValue(body).retrieve()
                    .bodyToMono(JsonNode.class)
                    .block();
            String content = resp.path("choices").get(0).path("message").path("content").asText();
            JsonNode json = mapper.readTree(content);
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
            if (out.isEmpty()) return fallback(q);
            return out;
        } catch (Exception ex) {
            return fallback(q);
        }
    }

    private List<Event> fallback(String q) {
        List<Event> list = new ArrayList<>();
        for (int i = 0; i < 12; i++) {
            Event e = new Event();
            e.setTitle("Sample Event " + (i + 1));
            e.setShortDescription("Concise preview for sample event " + (i + 1));
            e.setDescription("Placeholder full description for sample event " + (i + 1));
            e.setImageUrl("https://picsum.photos/seed/maya" + i + "/800/600");
            e.setLocation("Paris, Sample Venue");
            e.setStartDateTime(ZonedDateTime.now().plusDays(i + 1));
            e.setEndDateTime(ZonedDateTime.now().plusDays(i + 1).plusHours(2));
            list.add(e);
        }
        return list;
    }
}
