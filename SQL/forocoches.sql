create database forocoches;
USE forocoches;
CREATE TABLE users(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);
CREATE TABLE cars(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(16) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL
);