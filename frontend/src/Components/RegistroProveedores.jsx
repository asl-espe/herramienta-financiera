import React, { useState } from "react";

const RegistroProveedores = ({ agregarProveedor }) => {
  const [proveedor, setProveedor] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    whatsapp: "",
    correo: "",
    sitioWeb: "",
  });

  const handleChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarProveedor(proveedor);
    setProveedor({
      nombre: "",
      direccion: "",
      ciudad: "",
      whatsapp: "",
      correo: "",
      sitioWeb: "",
    });
  };

  return (
    <div className="container">
      <h2>Registro de Proveedores</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del proveedor</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={proveedor.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            name="direccion"
            value={proveedor.direccion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Ciudad</label>
          <input
            type="text"
            className="form-control"
            name="ciudad"
            value={proveedor.ciudad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">WhatsApp</label>
          <input
            type="url"
            className="form-control"
            name="whatsapp"
            value={proveedor.whatsapp}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correo"
            value={proveedor.correo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sitio web</label>
          <input
            type="url"
            className="form-control"
            name="sitioWeb"
            value={proveedor.sitioWeb}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            setProveedor({
              nombre: "",
              direccion: "",
              ciudad: "",
              whatsapp: "",
              correo: "",
              sitioWeb: "",
            })
          }
        >
          Limpiar
        </button>
      </form>
    </div>
  );
};

export default RegistroProveedores;
