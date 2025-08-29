package com.maya;

import com.maya.service.*;
import com.openai.client.OpenAIClient;
import com.openai.client.okhttp.OpenAIOkHttpClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;

@Configuration
public class DomainConfiguration {

    @Value("${openai.api.key:}")
    private String apiKey;

    @Bean
    AIModel createAIModel() {
        OpenAIClient client =  OpenAIOkHttpClient.builder()
                .apiKey(apiKey)
                .build();

        String system = "You are an events finder. Respond with STRICT JSON only: {\"events\":[...]} up to 30 items. Each item: title, shortDescription, description, imageUrl, location, startDateTime (ISO 8601 with timezone), endDateTime (optional).";
        return new ChatGptModel(client, system);
    }

    @Bean
    EventProvider createEventProvider(AIModel aiModel) {
        EventMapper eventMapper = new EventMapper();
        if (!StringUtils.hasText(apiKey)) {
            return new NopEventProvider(eventMapper);
        }
        return new AIEventProvider(aiModel, eventMapper);
    }
}
