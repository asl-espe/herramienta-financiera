import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';

const App = () => (
    <Router>
        <div className="d-flex">
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="/inventory" element={<Inventory />} />
                    {/* Rutas para otras secciones */}
                </Routes>
            </div>
        </div>
    </Router>
);

export default App;
