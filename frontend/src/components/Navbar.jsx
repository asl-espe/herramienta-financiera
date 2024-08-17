import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar bg-light">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link">Página Principal</Link>
            </li>
            <li className="nav-item">
                <Link to="/inventory" className="nav-link">Inventario</Link>
            </li>
            <li className="nav-item">
                <Link to="/calculator" className="nav-link">Calculadora</Link>
            </li>
            <li className="nav-item">
                <Link to="/catalog" className="nav-link">Catálogo</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;
