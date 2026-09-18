from flask import Flask, jsonify, render_template


app = Flask(__name__)


@app.route("/")
def hello_world():
    return render_template("hello.html")


@app.route("/<name>")
def personalized_hello(name):
    return render_template("hello.html", _name=name)


dices =[
{ "numberOfSides": 6},
{"numberOfSides": 2},
{"numberOfSides": 4},
{"numberOfSides": 8},
{"numberOfSides": 10},
{"numberOfSides": 12},
{"numberOfSides": 20}
]

@app.route("/api/dices", methods=["GET"])
def handle_dice_request():
    return jsonify(available_dices=dices)

  