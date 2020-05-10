import React from 'react';
import './App.css';
import ZonedClock from './ZonedClock.js';

function App() {
  return (
    <div className="App">
      <h1 className="header">World Times</h1>
      <div className="clock-container">
        <ZonedClock tz="America/New_York" />
        <ZonedClock tz="America/Los_Angeles" />
        <ZonedClock tz="America/Chicago" />
        <ZonedClock tz="UTC" />
        <ZonedClock tz="Europe/Zagreb" />
      </div>
    </div>
  );
}

export default App;
