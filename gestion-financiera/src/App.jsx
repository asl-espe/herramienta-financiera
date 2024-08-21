import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

import ReportPDF from './components/Reportes/viewReportes';

function App() {
  return (
    <div className="app-container">
      
      <ReportPDF />
      
    </div>
  );
}

export default App;
