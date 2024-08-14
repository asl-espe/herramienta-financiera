import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        {/* Aquí puedes poner una imagen del logo */}
        <img src="logo.png" alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Calculadora</a></li>
          <li><a href="#">Inventario</a></li>
          <li><a href="#">Catálogo</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
