import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Data Conversion Tool</h3>
            <ul className="sidebar-menu">
                <li className="sidebar-item">
                    <NavLink to="/queue-monitor" activeClassName="active" className="sidebar-link">Queue Monitor</NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/queue-mover" activeClassName="active" className="sidebar-link">Queue Mover</NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/delete-shapefiles" activeClassName="active" className="sidebar-link">Delete Shapefiles</NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/filedOpsMetrics" activeClassName="active" className="sidebar-link">Failed FieldOps Requests Stats</NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/performanceMetrics" activeClassName="active" className="sidebar-link">Performance Metrics</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;