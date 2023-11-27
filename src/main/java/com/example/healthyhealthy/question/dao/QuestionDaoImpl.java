package com.example.healthyhealthy.question.dao;

import com.example.healthyhealthy.question.entity.Question;
import com.example.healthyhealthy.question.mapper.QuestionMapper;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class QuestionDaoImpl implements QuestionDao {
    private final SqlSessionTemplate sqlSessionTemplate;

    @Autowired
    public QuestionDaoImpl(SqlSessionTemplate sqlSessionTemplate){
        this.sqlSessionTemplate = sqlSessionTemplate;
    }

    @Override
    public int insertQuestion(Question question) {
        return sqlSessionTemplate.insert("com.example.healthyhealthy.question.mapper.QuestionMapper.insertQuestion", question);
    }

    @Override
    public List<Question> selectQuestionList() {
        return sqlSessionTemplate.selectList("com.example.healthyhealthy.question.mapper.QuestionMapper.selectQuestionList");
    }
}
