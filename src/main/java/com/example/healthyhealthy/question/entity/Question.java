package com.example.healthyhealthy.question.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Question {
    private Long idx;
    private String title;
    private String userId;
    private int state;
    private String content;
    private MultipartFile uploadFile;
    private String creationDate;
    private String answerContent;
    private String answerDate;
    private Long count;
}
