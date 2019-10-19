DROP DATABASE IF EXISTS theGreatBay_db;

CREATE DATABASE theGreatBay_db;

USE theGreatBay_db;

CREATE TABLE items (
  id INT NOT NULL AUTO_ICREMENT,
  item_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (item_name, price)
VALUES("Monkey Paw", 50.00);

INSERT INTO items (item_name, price)
VALUES("Dorian Gray", 300.00);

INSERT INTO items (item_name, price)
VALUES("Supreme Brick", 2000.00);