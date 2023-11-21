import React, { useState } from 'react';
import axios from 'axios';

function EventPlanningAssistant() {
  const [eventInput, setEventInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [budgetInput, setBudgetInput] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/generate_event_ideas', {
        event_type: eventInput,
        location: locationInput,
        budget: budgetInput,
      });

      const data = response.data;
      setResults(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Event Type"
          value={eventInput}
          onChange={(e) => setEventInput(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {/* Add input fields for location and budget similarly */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Generate Ideas
        </button>
      </form>

      {/* Display results received from the backend */}
      {results && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Event Ideas:</h2>
          <ul className="list-disc pl-4">
            {results.event_ideas.map((idea, index) => (
              <li key={index} className="mb-2">{idea}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Venue Suggestions:</h2>
          <ul className="list-disc pl-4">
            {results.venues.map((venue, index) => (
              <li key={index} className="mb-2">{venue.title}, {venue.url}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EventPlanningAssistant;
