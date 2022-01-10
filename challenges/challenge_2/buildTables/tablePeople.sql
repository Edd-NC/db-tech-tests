CREATE TABLE people (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    dob DATE NOT NULL,
    favourite_film TEXT REFERENCES movies(title)
);