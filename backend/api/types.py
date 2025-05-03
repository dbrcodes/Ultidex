from flask import Blueprint, jsonify
import sqlite3

# creating blueprint
types_bp = Blueprint("type", __name__)


# define the route
@types_bp.route("/")  # define the endpoint at /api/types/
def get_all_types():
    conn = sqlite3.connect()  # connect to an SQLite file
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM types")  # run a query to pull all types from table
    rows = cursor.fetchall()  # takes the results
    conn.close()

    # Convert rows to dicts
    results = [
        {"id": r[0], "name": r[1], "type": r[2]} for r in rows
    ]  # convert rows into python dictionary
    return jsonify(results)  # converts the dictionary into a JSON http response
