import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Calculadora from './Calculadora';
import Catalogo from './Catalogo';
import Inicio from './Inicio';
import Inventario from './Inventario';
import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/catalogo" element={<Catalogo />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
