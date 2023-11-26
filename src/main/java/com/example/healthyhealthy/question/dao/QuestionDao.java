package com.example.healthyhealthy.question.dao;

import com.example.healthyhealthy.question.entity.Question;

import java.util.List;

public interface QuestionDao {
    int insertQuestion(Question question);
    List<Question> selectQuestionList();
}
