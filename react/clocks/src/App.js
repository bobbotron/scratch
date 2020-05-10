import React from 'react';
import './App.css';
import ZonedClockCollection from './ZonedClockCollection.js';

function App() {
  return (
    <div className="App">
      <h1 className="header">World Times</h1>

        <ZonedClockCollection zones={['America/New_York',
        'America/Los_Angeles',
        'America/Chicago',
        'UTC',
        'Europe/Zagreb']} />

        
      <div className="clock-container">
      </div>
    </div>
  );
}

export default App;
