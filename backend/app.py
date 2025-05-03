# initialise app w/flask
from flask import Flask

# blueprint import
from api.pokemon import pokemon_bp
from api.types import types_bp

app = Flask(__name__)

# registering the blueprints
app.register_blueprint(pokemon_bp, url_prefix="/api/pokemon")
app.register_blueprint(types_bp, url_prefix="/api/types")

if __name__ == "__main__":
    app.run(debug=True)
