import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Calculadora.css'; // Aquí puedes agregar tus estilos personalizados

export default function Inventario() {
  const [inventario, setInventario] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    producto: '',
    proveedor: '',
    cantidad: '',
    unidadMedida: 'kg',
    precio: '',
    almacen: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/api/inventario")
      .then(response => {
        setInventario(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto({
      ...nuevoProducto,
      [name]: value,
    });
  };

  const validate = () => {
    let validationErrors = {};
    if (!nuevoProducto.producto) validationErrors.producto = "El producto es requerido.";
    if (!nuevoProducto.proveedor) validationErrors.proveedor = "El proveedor es requerido.";
    if (!nuevoProducto.cantidad || nuevoProducto.cantidad <= 0) validationErrors.cantidad = "La cantidad debe ser un número positivo.";
    if (!nuevoProducto.precio || nuevoProducto.precio <= 0) validationErrors.precio = "El precio debe ser un número positivo.";
    if (!nuevoProducto.almacen) validationErrors.almacen = "El almacén es requerido.";
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleAdd = () => {
    if (validate()) {
      axios.post("http://localhost:3001/api/inventario", nuevoProducto)
        .then(response => {
          setInventario([...inventario, response.data]);
          clearForm();
        })
        .catch(error => console.error(error));
    }
  };

  const clearForm = () => {
    setNuevoProducto({
      producto: '',
      proveedor: '',
      cantidad: '',
      unidadMedida: 'kg',
      precio: '',
      almacen: '',
    });
    setErrors({});
  };

  return (
    <div className="inventario-container">
      <h2>Registro de Materiales</h2>
      <div className="inventario-form">
        <input
          type="text"
          name="producto"
          placeholder="Producto"
          value={nuevoProducto.producto}
          onChange={handleChange}
        />
        {errors.producto && <span className="error">{errors.producto}</span>}
        
        <input
          type="text"
          name="proveedor"
          placeholder="Proveedor"
          value={nuevoProducto.proveedor}
          onChange={handleChange}
        />
        {errors.proveedor && <span className="error">{errors.proveedor}</span>}
        
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={nuevoProducto.cantidad}
          onChange={handleChange}
        />
        {errors.cantidad && <span className="error">{errors.cantidad}</span>}
        
        <select
          name="unidadMedida"
          value={nuevoProducto.unidadMedida}
          onChange={handleChange}
        >
          <option value="kg">kg</option>
          <option value="litros">litros</option>
          <option value="metros">metros</option>
        </select>
        
        <input
          type="number"
          step="0.01"
          name="precio"
          placeholder="Precio"
          value={nuevoProducto.precio}
          onChange={handleChange}
        />
        {errors.precio && <span className="error">{errors.precio}</span>}
        
        <input
          type="number"
          name="almacen"
          placeholder="Almacén"
          value={nuevoProducto.almacen}
          onChange={handleChange}
        />
        {errors.almacen && <span className="error">{errors.almacen}</span>}
        
        <button className="add-button" onClick={handleAdd}>Agregar</button>
        <button className="clear-button" onClick={clearForm}>Limpiar</button>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Buscar..." />
        <button className="search-button">🔍</button>
      </div>

      <table className="inventario-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Proveedor</th>
            <th>Cantidad</th>
            <th>U_Medida</th>
            <th>Precio</th>
            <th>Almacén</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {inventario.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.producto}</td>
              <td>{item.proveedor}</td>
              <td>{item.cantidad}</td>
              <td>{item.unidadMedida}</td>
              <td>{item.precio}</td>
              <td>{item.almacen}</td>
              <td>
                <button className="edit-button">✏️</button>
                <button className="delete-button">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
