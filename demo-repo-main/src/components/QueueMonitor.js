import React from 'react';
import './QueueMonitor.css';

const QueueMonitor = () => {
    const queues = [
        { name: 'FieldOperationShapefileExportsQueue.fifo', messages: 13 },
        { name: 'FieldOperationShapefileExportsErrorQueue', messages: 0 },
        { name: 'FieldOperationShapefileExportsDeadLetterQueue', messages: 0 },
        { name: 'FieldOperationShapefileExportsReprocessQueue', messages: 0 },
        // Additional queues can be added here
    ];

    return (
        <div className="queue-monitor">
            <h2>Queue Monitor</h2>
            <div className="queue-list">
                {queues.map((queue, index) => (
                    <div key={index} className="queue-item">
                        <span>{queue.name}</span>
                        <button>View {queue.messages} Messages</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QueueMonitor;