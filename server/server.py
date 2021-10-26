from flask import Flask, flash, request, redirect, url_for, render_template
import urllib.request
import os
import flask
from werkzeug.utils import secure_filename

app = Flask(__name__)


@app.route("/")
def hello_world():
    return flask.render_template("index.html",token="Hello Flask+React")


app.run(debug=True)