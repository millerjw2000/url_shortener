package com.jmiller.urlshortener.backend.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    private JdbcTemplate template;
    private String tableName = "users";

    @Autowired
    public void setTemplate(JdbcTemplate template) {
        this.template = template;
    }

    public JdbcTemplate getTemplate(){
        return this.template;
    }

    public void save(String id, String username, String password) {
        String query = "INSERT INTO " + tableName + " (id,username, password) VALUES (?,?,?)";
        template.update(query, id, username, password);
    }

    public String getPassword(String username) {
        String query = "SELECT password FROM " + tableName + " WHERE username = ?";
        return template.queryForObject(query, String.class, username);
    }

    public String getId(String username) {
        String query = "SELECT id FROM " + tableName + " WHERE username = ?";
        return template.queryForObject(query, String.class, username);
    }


    public boolean containsUser(String username) {
        String query = "SELECT COUNT(*) FROM " + tableName + " WHERE username = ?";
        Integer count = template.queryForObject(query, Integer.class, username);
        return count > 0;
    }

    public boolean containsId(String id) {
        String query = "SELECT COUNT(*) FROM " + tableName + " WHERE id = ?";
        Integer count = template.queryForObject(query, Integer.class, id);
        return count > 0;
    }

}
