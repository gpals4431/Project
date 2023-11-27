package com.example.healthyhealthy.util.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration //스프링 환경 설정 파일
@EnableWebSecurity// 모든 요청 url이 스프링 시큐리티의 제어받도록하는 어노테이션
public class SpringSecurityConfig  {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable
                )
                .authorizeHttpRequests((authorizeHttpRequests) -> 
                        authorizeHttpRequests
                                //모든 요청을 허락
                            .requestMatchers(new AntPathRequestMatcher("/**")).permitAll()

                );
        return http.build();
      }
}
