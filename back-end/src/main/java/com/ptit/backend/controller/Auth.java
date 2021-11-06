package com.ptit.backend.controller;

import com.ptit.backend.entity.CustomerEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class Auth {
    @PostMapping(value = "/login")
    private boolean login (){
        return true;
    }

    @PostMapping(value = "/register")
    private boolean register (){
        return true;
    }
}
