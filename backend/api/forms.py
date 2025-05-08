from flask import Blueprint, jsonify
import sqlite3

# creating blueprint
forms_bp = Blueprint("form", __name__)


# define the route
@forms_bp.route("/")  # define the endpoint at /api/types/
def get_all_types():
    conn = sqlite3.connect("db/ultidex.db")  # connect to an SQLite file
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM forms")  # run a query to pull all types from table
    rows = cursor.fetchall()  # takes the results
    conn.close()

    # Convert rows to dicts
    results = [
        {
            "id": r[0],
            "nat. dex number": r[1],
            "form name": r[2],
            "primary type": r[3],
            "secondary type": r[4],
            "region": r[5],
        }
        for r in rows
    ]  # convert rows into python dictionary
    return jsonify(results)  # converts the dictionary into a JSON http response
