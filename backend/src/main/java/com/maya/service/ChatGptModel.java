package com.maya.service;

import com.openai.client.OpenAIClient;
import com.openai.models.ChatModel;
import com.openai.models.chat.completions.ChatCompletion;
import com.openai.models.chat.completions.ChatCompletionCreateParams;

public class ChatGptModel implements AIModel {

    private final OpenAIClient client;

    private final String system;

    public ChatGptModel(OpenAIClient client, String system) {
        this.client = client;
        this.system = system;
    }

    public String fetch(String query) {
        ChatCompletionCreateParams params = ChatCompletionCreateParams.builder()
                .addSystemMessage(system)
                .addUserMessage(query)
                .model(ChatModel.GPT_5)
                .build();
        ChatCompletion chatCompletion = client.chat().completions().create(params);

        return chatCompletion.choices().get(0).message().content().get();
    }
}
