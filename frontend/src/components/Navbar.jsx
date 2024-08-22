import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Inventario</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">Calculadora</Link>
            </li>
            {/* Agrega más enlaces aquí si es necesario */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
