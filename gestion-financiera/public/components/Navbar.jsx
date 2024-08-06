import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#reports">Reports</a></li>
        <li><a href="#settings">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
