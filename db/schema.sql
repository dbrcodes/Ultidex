-- Create regions
CREATE TABLE regions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);
-- Create types
CREATE TABLE types (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);
-- Create main pokemon table
CREATE TABLE pokemon (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  national_dex_number INTEGER NOT NULL UNIQUE,
  primary_type_id INTEGER,
  secondary_type_id INTEGER,
  region_id INTEGER,
  FOREIGN KEY (primary_type_id) REFERENCES types(id),
  FOREIGN KEY (secondary_type_id) REFERENCES types(id),
  FOREIGN KEY (region_id) REFERENCES regions(id)
);
-- Create stats table
CREATE TABLE stats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  pokemon_id INTEGER,
  hp INTEGER,
  attack INTEGER,
  defense INTEGER,
  sp_attack INTEGER,
  sp_defense INTEGER,
  speed INTEGER,
  FOREIGN KEY (pokemon_id) REFERENCES pokemon(id)
);