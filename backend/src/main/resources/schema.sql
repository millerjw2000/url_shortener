CREATE table if NOT EXISTS users (

    id VARCHAR(25) PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL

);

CREATE table if NOT EXISTS urls (
    
    id VARCHAR(25) PRIMARY KEY,
    code VARCHAR(5) NOT NULL,
    fullLink VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL

);