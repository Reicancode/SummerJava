package com.example.handlingformsubmission;

import jakarta.validation.constraints.NotBlank;

public class Greeting {
    private long id;

    @NotBlank(message = "Content must not be blank")
    private String content;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
