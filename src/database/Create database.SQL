/*


CREATE DATABASE social;

USE social;

CREATE TABLE posts(
id INT(11) NOT NULL AUTO_INCREMENT,
content TEXT NOT NULL,
picture TEXT,
upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

