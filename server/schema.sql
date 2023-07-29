CREATE DATABASE IF NOT EXISTS movielist;

USE movielist;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id INT NOT NULL auto_increment,
  title VARCHAR(200) DEFAULT NULL,
  watched INT DEFAULT 1,
  PRIMARY KEY (id),
  UNIQUE (title)
);