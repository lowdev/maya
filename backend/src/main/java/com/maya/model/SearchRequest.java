package com.maya.model;

import jakarta.validation.constraints.NotBlank;

public class SearchRequest {
    @NotBlank
    private String query;

    public SearchRequest() {
    }

    public SearchRequest(String q) {
        this.query = q;
    }

    public String getQuery() {
        return query;
    }

    public void setQuery(String q) {
        this.query = q;
    }
}
