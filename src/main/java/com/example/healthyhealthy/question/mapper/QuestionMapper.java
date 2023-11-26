package com.example.healthyhealthy.question.mapper;

import com.example.healthyhealthy.question.entity.Question;

import java.util.List;

public interface QuestionMapper {
    int insertQuestion(Question question);
    List<Question> selectQuestionList();
}
