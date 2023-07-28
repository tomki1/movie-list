CREATE DATABASE IF NOT EXISTS movielist;

USE movielist;



CREATE TABLE movies (
  id INT NOT NULL auto_increment,
  title VARCHAR(200) DEFAULT NULL,
  watched BIT(1) DEFAULT 1,
  PRIMARY KEY (id)
);