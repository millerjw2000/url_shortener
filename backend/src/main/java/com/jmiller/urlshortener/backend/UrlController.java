package com.jmiller.urlshortener.backend;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jmiller.urlshortener.backend.Repo.UrlRepository;
import com.jmiller.urlshortener.backend.Model.Url;
import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;

@RestController
public class UrlController {
    
    private UrlRepository urlRepository;

    public UrlController(UrlRepository urlRepository) { // idk if this is even needed
        this.urlRepository = urlRepository;
    }

    @PostMapping("/enter/url={url}") // this is ugly
    public ArrayList<Url> enterUrl(@PathVariable String url, Authentication auth) {
        
        String id = GenerateId.generate(25);
        String userId = (String) auth.getPrincipal();

        Url u = new Url();
        u.setId(id);
        u.setFullLink(url);
        u.setUserId(userId);

        String code = GenerateId.generate(10);
        while (urlRepository.containsCode(code)) {
            code = GenerateId.generate(10);
        }
        u.setCode(code);

        urlRepository.enter(u);

        System.out.println("Url successfully saved. (" + u + " | " + code + ")");

        return urlRepository.getAll(userId);

    }

    @GetMapping("/getAll")
    public ArrayList<Url> getAll(Authentication auth) {
        String userId = (String) auth.getPrincipal();
        return urlRepository.getAll(userId);
    }

    @DeleteMapping("/delete/id={id}")
    public ArrayList<Url> delete(@PathVariable String id, Authentication auth) {
        urlRepository.delete(id);
        String userId = (String) auth.getPrincipal();
        return urlRepository.getAll(userId);
    }

}
