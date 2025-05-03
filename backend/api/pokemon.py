from flask import Blueprint, jsonify
import sqlite3

# creating blueprint
pokemon_bp = Blueprint("pokemon", __name__)


# define the route
@pokemon_bp.route("/")  # define the endpoint at /api/pokemon/
def get_all_pokemon():
    conn = sqlite3.connect()  # connect to an SQLite file
    cursor = conn.cursor()
    cursor.execute(
        "SELECT * FROM pokemon"
    )  # run a query to pull all pokemon from table
    rows = cursor.fetchall()  # takes the results
    conn.close()

    # Convert rows to dicts
    results = [
        {"id": r[0], "name": r[1], "type": r[2]} for r in rows
    ]  # convert rows into python dictionary
    return jsonify(results)  # converts the dictionary into a JSON http response
