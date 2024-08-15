import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo_url" alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <a href="/inicio">
              <i className="fas fa-home"></i> Inicio
            </a>
          </li>
          <li>
            <a href="/calculadora">
              <i className="fas fa-calculator"></i> Calculadora
            </a>
          </li>
          <li>
            <a href="/inventario">
              <i className="fas fa-boxes"></i> Inventario
            </a>
          </li>
          <li>
            <a href="/catalogo">
              <i className="fas fa-book"></i> Catálogo
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
