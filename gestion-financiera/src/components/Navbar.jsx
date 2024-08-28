import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo_url" alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Inicio
            </Link>
          </li>
          <li>
            <Link to="/calculadora">
              <i className="fas fa-calculator"></i> Calculadora
            </Link>
          </li>
          <li>
            <Link to="/inventario">
              <i className="fas fa-boxes"></i> Inventario
            </Link>
          </li>
          <li>
            <Link to="/catalogo">
              <i className="fas fa-book"></i> Catálogo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
