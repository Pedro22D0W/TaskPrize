CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    balance INTEGER NOT NULL
);
