package com.example.handlingformsubmission;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class GreetingControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void testGetGreetingForm() throws Exception {
        mvc.perform(get("/greeting"))
                .andExpect(status().isOk())
                .andExpect(content().string(Matchers.containsString("<form")));
    }

    @Test
    public void testPostGreeting() throws Exception {
        mvc.perform(post("/greeting")
                        .param("id", "1")
                        .param("content", "Hello, User!"))
                .andExpect(status().isOk())
                .andExpect(content().string(Matchers.containsString("id: 1")))
                .andExpect(content().string(Matchers.containsString("content: Hello, User!")));
    }

    @Test
    public void testGetGreetingFormAfterReset() throws Exception {
        mvc.perform(get("/greeting"))
                .andExpect(status().isOk())
                .andExpect(content().string(Matchers.containsString("value=\"\"")));
    }
}
