package com.example.react_bakend_test.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// 리액트와 연결
@CrossOrigin("http://localhost:5173")
@RestController
public class BackendController {
    @RequestMapping("/hello")
    public String index() {
        return "hello world";
    }
}
