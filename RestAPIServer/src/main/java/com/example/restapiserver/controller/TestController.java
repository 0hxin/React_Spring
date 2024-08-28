package com.example.restapiserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    // CORS : 다른 출처 자원을 공유하여 사용
    // 다른 출처에서 리소스를 가져와 사용하면 오류 발생
    // CORS 오류 해결 방법
    // 1. 리액트에서 프록시 서버 사용
    // 2. 스프링 서버에서 CORS 설정
    //  2.1 @CrossOrigin 어노테이션 사용 (Controller 클래스나 메소드에서 사용)
    //  2.2 WebMvcConfigurer 인터페이스 구현
//    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping("/test")
    public String index() throws Exception{
        return "TestController 접속 성공";
    }
}
