package com.example.healthyhealthy.user.mapper;

import com.example.healthyhealthy.user.entity.User;

public interface UserMapper {
    int insertUser(User user);
    User selectUser(String id);
}
