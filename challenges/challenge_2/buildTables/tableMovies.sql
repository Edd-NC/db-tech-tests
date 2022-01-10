CREATE TABLE movies (
    title VARCHAR(100) PRIMARY KEY NOT NULL,
    genre VARCHAR(32) NOT NULL,
    release_year VARCHAR(4) NOT NULL,
    director VARCHAR(64) NOT NULL,
    avg_rating FLOAT NOT NULL
);