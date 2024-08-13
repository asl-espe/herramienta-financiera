import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1>Slogan</h1>
        <p>Pequeña descripción del sistema</p>
      </div>
    </div>
  );
}

export default App;
