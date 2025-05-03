from flask import Blueprint, jsonify
import sqlite3

# creating blueprint
pokemon_bp = Blueprint("pokemon", __name__)


# define the route
@pokemon_bp.route("/")
def get_all_pokemon():
    conn = sqlite3.connect("db/pokedex_kanto.sql")  # or your merged DB
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM pokemon")
    rows = cursor.fetchall()
    conn.close()

    # Convert rows to dicts
    results = [{"id": r[0], "name": r[1], "type": r[2]} for r in rows]
    return jsonify(results)
