from flask import Blueprint, jsonify
import sqlite3

# creating blueprint
regions_bp = Blueprint("region", __name__)


# define the route
@regions_bp.route("/")  # define the endpoint at /api/regions/
def get_all_regions():
    conn = sqlite3.connect("db/ultidex.db")  # connect to an SQLite file
    cursor = conn.cursor()
    cursor.execute(
        "SELECT * FROM regions"
    )  # run a query to pull all regions from table
    rows = cursor.fetchall()  # takes the results
    conn.close()

    # Convert rows to dicts
    results = [
        {"id": r[0], "name": r[1]} for r in rows
    ]  # convert rows into python dictionary
    return jsonify(results)  # converts the dictionary into a JSON http response
