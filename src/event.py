# app.py

from flask import Flask, request, jsonify
import openai
from metaphor_python import Metaphor
import API

app = Flask(__name__)

# Replace with your API keys
openai.api_key = API.openAI_API
metaphor = Metaphor(API.metaphor_API)

# Function to suggest venues using Metaphor
def suggest_event_venues(event_type, location, budget):
    query = f"{event_type} venues in {location} within {budget} budget"
    search_response = metaphor.search(query, use_autoprompt=True)
    return search_response.results[:5]

# Function for chat-based completion
def chat_completion(user_question):
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_question},
        ],
    )
    return completion.choices[0].message.content

@app.route('/api/generate_event_ideas', methods=['POST'])
def generate_event_ideas():
    data = request.json  # Assuming you send user input as JSON from the React frontend
    
    user_input = data.get('event_type')
    location = data.get('location')
    budget = data.get('budget')
    
    event_ideas = chat_completion(f"Generate event ideas for '{user_input}'")
    venues = suggest_event_venues(user_input, location, budget)
    
    return jsonify(event_ideas=event_ideas, venues=venues)

# Define your chat_completion and suggest_event_venues functions here

if __name__ == "__main__":
    app.run(debug=True)
