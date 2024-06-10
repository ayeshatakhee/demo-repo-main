import React, { useState } from 'react';
import './PerformanceMetrics.css';

const PerformanceMetrics = () => {
    const [range, setRange] = useState('custom');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleFetch = () => {
        console.log("Fetching data from:", fromDate, "to", toDate);
        // Logic to fetch data based on the dates
    };

    return (
        <div className="performance-metrics">
            <h2>FieldOps ShapeFile Export Performance Metrics</h2>
            <div className="date-picker">
                <select value={range} onChange={(e) => setRange(e.target.value)}>
                    <option value="custom">Custom</option>
                    <option value="lastWeek">Last Week</option>
                    <option value="lastMonth">Last Month</option>
                </select>
                <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    placeholder="From Date"
                />
                <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    placeholder="To Date"
                />
                <button onClick={handleFetch}>Fetch</button>
            </div>
            <p>Please Fetch to get the results.</p>
        </div>
    );
};

export default PerformanceMetrics;