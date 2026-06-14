package com.jmiller.urlshortener.backend.Repo;

import org.springframework.stereotype.Repository;

import com.jmiller.urlshortener.backend.Model.Url;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@Repository
public class UrlRepository {
    
    private JdbcTemplate template;
    private String tableName = "urls";

    @Autowired
    public void setTemplate(JdbcTemplate template) {
        this.template = template;
    }

    public JdbcTemplate getTemplate(){
        return this.template;
    }

    public void enter(Url url) {
        String query = "INSERT INTO " + tableName + " (id,code,fullLink,userId) VALUES (?,?,?,?)";
        template.update(query,
            url.getId(),
            url.getCode(),
            url.getFullLink(),
            url.getUserId()
        );
    }

}
