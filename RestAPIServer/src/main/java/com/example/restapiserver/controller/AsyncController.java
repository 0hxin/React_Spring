package com.example.restapiserver.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/async")
@RestController
public class AsyncController {
    //    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping({"/", ""})
    public String index() throws Exception{
        return "비동기 통신 접속 테스트의 index 메소드";
    }

    //    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping(value = "/sendDataGet", method = RequestMethod.GET)
    public Object sendDataGet() throws Exception{
        Map<String, String> result = new HashMap<>();

        result.put("result", "success");
        result.put("data", "GET 비동기 통신 성공");

        return result;
    }

    //    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/sendDataGetParam")
    public Object sendDataGetParam(@RequestParam("idx") int idx) throws Exception{
        Map<String, String> result = new HashMap<>();

        result.put("result", "success");
        result.put("data", String.valueOf(idx));

        return result;
    }
    
    @PostMapping("/sendDataPost")
    public Object sendDataPost(@RequestParam("userId") String userId, @RequestParam("userPw") String userPw) throws Exception{
        Map<String, String> user = new HashMap<>();

        user.put("userId", userId);
        user.put("userPw", userPw);

        Map<String, String> result = new HashMap<>();

        result.put("result", "success");
        result.put("data", user.toString());

        return result;
    }

    @PutMapping("/sendDataPut")
    public Object sendDataPut(@RequestParam("idx") String idx) throws Exception{
        Map<String, Object> result = new HashMap<>();

        result.put("result", "success");
        result.put("data", idx + 100);

        return result;
    }

    @DeleteMapping("/sendDataDelete")
    public Object sendDataDelete(@RequestParam("idx") int idx) throws Exception{
        Map<String, Object> result = new HashMap<>();

        result.put("result", "success");
        result.put("data", idx - 100);

        return result;
    }
}
