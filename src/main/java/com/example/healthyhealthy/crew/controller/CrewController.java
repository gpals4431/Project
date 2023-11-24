package com.example.healthyhealthy.crew.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CrewController {
    @GetMapping("/crew")
    public String crewForm(){
        return "crew-detail.html";
    }
}
