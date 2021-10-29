package com.ptit.backend.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class Demo {
    @GetMapping("/a")
    public List<Demo> findByKey(@RequestParam(name = "key") String key, Pageable pageable) {
        return new ArrayList<>();
    }
}
