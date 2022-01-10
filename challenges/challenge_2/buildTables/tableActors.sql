CREATE TABLE actors(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    dob DATE NOT NULL,
    number_of_awards smallint,
    number_of_nominations smallint
);