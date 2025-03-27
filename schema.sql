CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    bags (
        id SERIAL PRIMARY KEY,
        brand TEXT NOT NULL,
        model TEXT NOT NULL,
        color TEXT NOT NULL,
        size TEXT NOT NULL,
        price INT NOT NULL
    );

CREATE TABLE
    users_favorites (
        id SERIAL PRIMARY KEY,
        users_id INT NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        bags_id INT NOT NULL REFERENCES bags (id) ON DELETE CASCADE,
    )