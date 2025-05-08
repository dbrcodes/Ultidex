from flask import Blueprint, jsonify, request
import sqlite3

# creating blueprint
pokemon_bp = Blueprint("pokemon", __name__)


# define the routes


# define the endpoint at /api/pokemon/
@pokemon_bp.route("/")
def get_all_pokemon():
    conn = sqlite3.connect("db/ultidex.db")  # connect to an SQLite file
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


# define the endpoint for individual pokemon
@pokemon_bp.route("/<int:nat_dex_id>", methods=["GET"])
def get_pokemon_by_id(nat_dex_id):
    conn = sqlite3.connect("db/ultidex.db")
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    cur.execute("SELECT * FROM pokemon WHERE nat_dex_id = ?", (nat_dex_id,))
    row = cur.fetchone()
    conn.close()

    if row is None:
        return jsonify({"error": "Pokémon not found"}), 404

    return jsonify(dict(row))


# define the endpoint for individual pokemon forms
@pokemon_bp.route("/<int:nat_dex_id>/forms", methods=["GET"])
def get_forms_by_nat_dex_id(nat_dex_id):
    conn = sqlite3.connect("db/ultidex.db")
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    cur.execute("SELECT * FROM pokemon WHERE nat_dex_id = ?", (nat_dex_id,))
    base = cur.fetchone()

    if base is None:
        conn.close()
        return jsonify({"error": "Pokémon not found"}), 404

    pokemon_id = base["id"]

    cur.execute("SELECT * FROM forms WHERE pokemon_id = ?", (pokemon_id,))
    forms = cur.fetchall()
    conn.close()

    if not forms:
        return jsonify({"error": "No alternate Pokémon form found"}), 404

    base_form = dict(base)
    base_form["form_name"] = "Base Form"
    base_form["from_table"] = "pokemon"

    formatted_forms = [{**dict(f), "from_table": "forms"} for f in forms]

    return jsonify([base_form] + formatted_forms)


@pokemon_bp.route("/search", methods=["GET"])
def search_pokemon():
    name_query = request.args.get("name", "").strip()

    if not name_query:
        return jsonify({"error": "Missing 'name' query parameter"}), 400

    conn = sqlite3.connect("db/ultidex.db")
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    like_pattern = f"%{name_query}%"
    cur.execute("SELECT * FROM pokemon WHERE name LIKE ?", (like_pattern,))
    results = cur.fetchall()
    conn.close()

    return jsonify([dict(row) for row in results])
