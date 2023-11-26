package com.example.healthyhealthy.question.dao;

import com.example.healthyhealthy.question.entity.Question;
import com.example.healthyhealthy.question.mapper.QuestionMapper;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@RequiredArgsConstructor
public class QuestionDaoImpl implements QuestionDao {
    private final SqlSession sqlSession;

    @Override
    public int insertQuestion(Question question) {
        return sqlSession.getMapper(QuestionMapper.class).insertQuestion(question);
    }

    @Override
    public List<Question> selectQuestionList() {
        return sqlSession.getMapper(QuestionMapper.class).selectQuestionList();
    }
}
