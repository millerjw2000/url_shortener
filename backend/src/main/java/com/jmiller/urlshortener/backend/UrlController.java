package com.jmiller.urlshortener.backend;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jmiller.urlshortener.backend.Repo.UrlRepository;
import com.jmiller.urlshortener.backend.Model.Url;

import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class UrlController {
    
    private UrlRepository urlRepository;

    public UrlController(UrlRepository urlRepository) {
        this.urlRepository = urlRepository;
    }

    @PostMapping("/urls/url={url}") // this is ugly
    public String enterUrl(@PathVariable String url) {
        
        String id = GenerateId.generate(25);

        Url u = new Url();
        u.setId(id);

    }

}
