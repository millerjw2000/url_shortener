package com.jmiller.urlshortener.backend.Model;

public class Url {
    
    private String id;
    private String code;
    private String fullLink;
    private String userId;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getFullLink() {
        return fullLink;
    }
    public void setFullLink(String fullLink) {
        this.fullLink = fullLink;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }

}
