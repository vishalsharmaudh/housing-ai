from flask import Flask, render_template, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

model = joblib.load("model.pkl")
pipeline = joblib.load("pipeline.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    input_data = pd.DataFrame([data])
    transformed_data = pipeline.transform(input_data)
    prediction = model.predict(transformed_data)[0]

    return jsonify({"price": round(prediction, 2)})

if __name__ == "__main__":
    app.run(debug=True)