# command to recreate DB
import sqlite3


def init_db():
    with open("db/schema.sql") as f:
        schema = f.read()
    with sqlite3.connect("db/ultidex.db") as conn:
        conn.executescript(schema)


def seed_db():
    with open("db/seed.sql") as f:
        seed = f.read()
    with sqlite3.connect("db/ultidex.db") as conn:
        conn.executescript(seed)


if __name__ == "__main__":
    init_db()
    seed_db()
    print("Database initialized and seeded.")
