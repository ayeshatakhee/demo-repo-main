// src/components/QueueMover.js
import React, { useState } from 'react';
import './QueueMover.css';


function QueueMover() {
  const [sourceQueue, setSourceQueue] = useState('');
  const [destinationQueue, setDestinationQueue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission
  };

  return (
    <div className="queue-mover">
      <h2>Queue Mover</h2>
      <form onSubmit={handleSubmit}>
        <select value={sourceQueue} onChange={(e) => setSourceQueue(e.target.value)}>
          <option value="" disabled>Please Select Source Queue</option>
          <option value="queue1">Queue 1</option>
          <option value="queue2">Queue 2</option>
          <option value="queue3">Queue 3</option>
          <option value="queue4">Queue 4</option>
        </select>
        <select value={destinationQueue} onChange={(e) => setDestinationQueue(e.target.value)}>
          <option value="" disabled>Please Select Destination Queue</option>
          <option value="queue1">Queue 1</option>
          <option value="queue2">Queue 2</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QueueMover;