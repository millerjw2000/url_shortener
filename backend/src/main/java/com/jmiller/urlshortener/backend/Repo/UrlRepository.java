package com.jmiller.urlshortener.backend.Repo;

import org.springframework.stereotype.Repository;

import com.jmiller.urlshortener.backend.Model.Url;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.jdbc.core.RowMapper;

@Repository
public class UrlRepository {
    
    private JdbcTemplate template;
    private String tableName = "urls";

    @Autowired
    public void setTemplate(JdbcTemplate template) {
        this.template = template;
    }

    private RowMapper<Url> mapper = new RowMapper<Url>() {
        @Override
        public Url mapRow(ResultSet rs, int row) throws SQLException {
        
            Url u = new Url();
            
            u.setId(rs.getString("id"));
            u.setUserId(rs.getString("userId"));
            u.setCode(rs.getString("code"));
            u.setFullLink(rs.getString("fullLink"));

            return u;

        }
    };

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

    public ArrayList<Url> getAll(String userId) {
        String query = "SELECT * FROM " + tableName + " WHERE userId = ?";
        ArrayList<Url> urls = new ArrayList<Url>(template.query(query,mapper,userId));
        return urls;
    }

    public String getFullLink(String code) {
        String query = "SELECT fullLink from " + tableName + " WHERE code = ?";
        return template.queryForObject(query,String.class,code);
    }

    public void delete(String id) {
        String query = "DELETE FROM " + tableName + " WHERE id = ?";
        template.update(query,id);
    }

}
