package com.snjtjj.webapi;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginAPI {
@PostMapping("/failure")
    public String failure(){
        return "{'message':'error'}";
    }
}
