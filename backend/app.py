# initialise app w/flask
from flask import Flask
from flask_cors import CORS

# blueprint import
from api.pokemon import pokemon_bp
from api.types import types_bp
from api.forms import forms_bp
from api.regions import regions_bp
from api.stats import stats_bp

app = Flask(__name__)
CORS(app)

# registering the blueprints
app.register_blueprint(pokemon_bp, url_prefix="/api/pokemon")
app.register_blueprint(types_bp, url_prefix="/api/types")
app.register_blueprint(forms_bp, url_prefix="/api/forms")
app.register_blueprint(regions_bp, url_prefix="/api/regions")
app.register_blueprint(stats_bp, url_prefix="/api/stats")

if __name__ == "__main__":
    app.run(debug=True)
