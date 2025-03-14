CREATE TABLE tasks(
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    progress INTEGER NOT NULL,
    payment INTEGER NOT NULL,
    stattus BOOLEAN NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);