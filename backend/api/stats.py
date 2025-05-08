from flask import Blueprint, jsonify
import sqlite3

# creating blueprint
stats_bp = Blueprint("stat", __name__)


# define the route
@stats_bp.route("/")  # define the endpoint at /api/types/
def get_all_stats():
    conn = sqlite3.connect("db/ultidex.db")  # connect to an SQLite file
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM stats")  # run a query to pull all types from table
    rows = cursor.fetchall()  # takes the results
    conn.close()

    # Convert rows to dicts
    results = [
        {
            "id": r[0],
            "nat. dex number": r[1],
            "hp": r[2],
            "attack": r[3],
            "defense": r[4],
            "sp.attack": r[5],
            "sp.defense": r[6],
            "speed": r[7],
            "total": r[8],
            "form": r[9],
        }
        for r in rows
    ]  # convert rows into python dictionary
    return jsonify(results)  # converts the dictionary into a JSON http response
