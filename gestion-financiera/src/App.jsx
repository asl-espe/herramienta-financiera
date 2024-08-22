import React from 'react';
import './App.css';
import ReportPDF from './components/Reportes/viewReportes';
import Dashboard from './components/Dashboard.jsx'
import Navbar from './components/Navbar';
import viewReportes from './components/Reportes/viewReportes.jsx'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/inventario" element={<viewReportes/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
