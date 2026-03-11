from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is running successfully!"

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-pro")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message")

    response = model.generate_content(user_message)

    return jsonify({"reply": response.text})

if __name__ == "__main__":
    app.run(debug=True)