import React from 'react';
import Sidebar from '../components/Sidebar';
import QueueMover from '../components/QueueMover';

function HomePage() {
  return (
    <div className="App">
      <Sidebar />
      {/* <div className="content">
        <QueueMover />
      </div> */}
    </div>
  );
}

export default HomePage;