import React, { useState } from "react";

const RegistroMateriales = ({ proveedores, agregarMaterial }) => {
  const [material, setMaterial] = useState({
    nombreProducto: "",
    proveedor: "",
    cantidad: 0,
    unidadMedida: "kg",
    precio: 0.0,
    stock: 0,
  });

  const handleChange = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarMaterial(material);
    setMaterial({
      nombreProducto: "",
      proveedor: "",
      cantidad: 0,
      unidadMedida: "kg",
      precio: 0.0,
      stock: 0,
    });
  };

  return (
    <div className="container">
      <h2>Registro de Materiales</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre del Producto</label>
          <input
            type="text"
            className="form-control"
            name="nombreProducto"
            value={material.nombreProducto}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Proveedor</label>
          <select
            className="form-control"
            name="proveedor"
            value={material.proveedor}
            onChange={handleChange}
          >
            {proveedores.map((prov, index) => (
              <option key={index} value={prov.nombre}>
                {prov.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            className="form-control"
            name="cantidad"
            value={material.cantidad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Unidad de Medida</label>
          <select
            className="form-control"
            name="unidadMedida"
            value={material.unidadMedida}
            onChange={handleChange}
          >
            <option value="kg">kg</option>
            <option value="gr">gr</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="precio"
            value={material.precio}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={material.stock}
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
            setMaterial({
              nombreProducto: "",
              proveedor: "",
              cantidad: 0,
              unidadMedida: "kg",
              precio: 0.0,
              stock: 0,
            })
          }
        >
          Limpiar
        </button>
      </form>
    </div>
  );
};

export default RegistroMateriales;
