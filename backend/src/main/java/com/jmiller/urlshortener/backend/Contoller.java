package com.jmiller.urlshortener.backend;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Contoller {
    

    @PostMapping("/enter/")
    public String test() {
        return "dsadasdsadsadsa";
    }

}
