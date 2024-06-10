// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import QueueMonitor from './components/QueueMonitor';
import QueueMover from './components/QueueMover';
import DeleteShapefiles from './components/DeleteShapeFiles';
import FieldOpsMetrics from './components/FieldOpsMetrics';
import PerformanceMetrics from './components/PerformanceMetrics';
// Import other components for additional buttons

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/queue-monitor" element={<QueueMonitor />} />
            <Route path="/queue-mover" element={<QueueMover />} />
            <Route path="/delete-shapefiles" element={<DeleteShapefiles />} />
            <Route path="/filedOpsMetrics" element={<FieldOpsMetrics />} />
            <Route path="/performanceMetrics" element={<PerformanceMetrics />} />
            {/* Add routes for other buttons */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;