package com.example.healthyhealthy.question.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class QuestionController {
    @GetMapping("/question_list")
    public String questionList(){
        return "/question";
    }
}
