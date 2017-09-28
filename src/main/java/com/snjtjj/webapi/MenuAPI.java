package com.snjtjj.webapi;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/menu")
public class MenuAPI {
    @GetMapping
    public String menu(String userId,@RequestHeader("Authorization") String Authorization){

        return null;
    }
}
