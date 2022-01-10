CREATE TABLE snacks (
    food TEXT NOT NULL PRIMARY KEY,
    category TEXT,
    movie_friendly BOOLEAN NOT NULL,
    rating_out_of_5 FLOAT NOT NULL
);

CREATE TABLE movies (
    title VARCHAR(100) PRIMARY KEY NOT NULL,
    genre VARCHAR(32) NOT NULL,
    release_year VARCHAR(4) NOT NULL,
    director VARCHAR(64) NOT NULL,
    avg_rating FLOAT NOT NULL
);

CREATE TABLE actors(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    dob DATE NOT NULL,
    number_of_awards smallint,
    number_of_nominations smallint
);

CREATE TABLE people (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    dob DATE NOT NULL,
    favourite_film TEXT REFERENCES movies(title)
);