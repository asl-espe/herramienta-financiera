import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
return (
    <div className="sidebar">
    <h2>Menu</h2>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </div>
);
};

export default Sidebar;
