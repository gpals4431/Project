package com.example.healthyhealthy.user.dao;

import com.example.healthyhealthy.user.entity.User;

public interface UserDao {
    int insertUser(User user);
    User selectUser(String id);
}
