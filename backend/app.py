from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

API_KEY = os.getenv("GROQ_API_KEY")

@app.route("/")
def home():
    return "Backend running"

@app.route("/chat", methods=["POST"])
def chat():

    user_message = request.json["message"]

    response = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "llama-3.1-8b-instant",
            "messages": [
                {"role": "user", "content": user_message}
            ]
        }
    )

    data = response.json()

    print("GROQ RESPONSE:", data)

    if "choices" not in data:
        return jsonify(data)

    ai_reply = data["choices"][0]["message"]["content"]

    return jsonify({"reply": ai_reply})

if __name__ == "__main__":
    app.run(debug=True)