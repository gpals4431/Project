package com.example.healthyhealthy.user.dao;

import com.example.healthyhealthy.user.entity.User;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao{
    private final SqlSessionTemplate sqlSessionTemplate;

    @Autowired
    public UserDaoImpl(SqlSessionTemplate sqlSessionTemplate){this.sqlSessionTemplate = sqlSessionTemplate;}

    @Override
    public User selectUser(String id) {
        return sqlSessionTemplate.selectOne("com.example.healthyhealthy.user.mapper.UserMapper.selectUser", id);
    }
}
