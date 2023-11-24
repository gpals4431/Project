package com.example.healthyhealthy.crew.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.sql.Date;

@Entity
public class Crew {
    @Id //Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)//identity가 maria/mysql에서 사용
    private Integer idx;
    private Integer user_idx;
    private String subject;
    private String category;
    private String content;
    private String img1;
    private String img2;
    private Date creation_date;
    private Integer crew_count;
    private Date deadline;
    private String location;





}
    CREATE TABLE `crew` (
        `IDX` bigint(20) NOT NULL AUTO_INCREMENT,
        `USER_IDX` bigint(20) DEFAULT NULL,
        `SUBJECT` varchar(200) DEFAULT NULL,
        `CATEGORY` varchar(100) DEFAULT NULL,
        `CONTENT` varchar(1000) DEFAULT NULL,
        `IMG1` varchar(100) DEFAULT NULL,
        `IMG2` varchar(100) DEFAULT NULL,
        `CREATION_DATE` date DEFAULT NULL,
        `CREW_COUNT` int(11) DEFAULT NULL,
        `DEADLINE` date DEFAULT NULL,
        `LOCATION` varchar(100) DEFAULT NULL,
        PRIMARY KEY (`IDX`)
        ) ENGINE=InnoDB DEFAULT CHA