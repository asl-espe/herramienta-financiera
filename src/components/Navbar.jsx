import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo_url" alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="navbar-brand">
              <i className="fas fa-home"> Home </i>
            </Link>
          </li>
          <li>
            <Link to="/calculadora">
              <i className="fas fa-calculator"> Calculadora</i>
            </Link>
          </li>
          <li>
            <Link to="/inventario">
              <i className="fas fa-boxes"> Inventario</i>
            </Link>
          </li>
          <li>
            <Link to="/catalogo">
              <i className="fas fa-book"> Catálogo</i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
