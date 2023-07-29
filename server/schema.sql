CREATE DATABASE IF NOT EXISTS movielist;

USE movielist;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id INT NOT NULL auto_increment,
  title VARCHAR(200) NOT NULL DEFAULT '',
  watched INT DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE (title)
);