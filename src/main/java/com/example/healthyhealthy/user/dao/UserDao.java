package com.example.healthyhealthy.user.dao;

import com.example.healthyhealthy.user.entity.User;

public interface UserDao {
    User selectUser(String id);
}
