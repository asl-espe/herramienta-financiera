import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import './Calculadora.css'; // Aquí puedes agregar tus estilos personalizados

// Componente para la fila de la tabla
const InventarioRow = ({ item, index, onEdit, onDelete }) => (
  <tr>
    <td>{index + 1}</td>
    <td>{item.producto}</td>
    <td>{item.proveedor}</td>
    <td>{item.cantidad}</td>
    <td>{item.unidadMedida}</td>
    <td>{item.precio}</td>
    <td>{item.almacen}</td>
    <td>
      <button className="edit-button" onClick={() => onEdit(item)}>✏️</button>
      <button className="delete-button" onClick={() => onDelete(item.id)}>🗑️</button>
    </td>
  </tr>
);

// Hook personalizado para manejar el formulario
const useFormulario = (inicial, validar) => {
  const [valores, setValores] = useState(inicial);
  const [errores, setErrores] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValores(prevValores => ({
      ...prevValores,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((callback) => {
    if (validar()) {
      callback();
      clearForm();
    }
  }, [valores]);

  const clearForm = useCallback(() => {
    setValores(inicial);
    setErrores({});
  }, [inicial]);

  return {
    valores,
    errores,
    setErrores,
    handleChange,
    handleSubmit,
    clearForm,
  };
};

export default function Inventario() {
  const [inventario, setInventario] = useState([]);

  const validar = useCallback(() => {
    let validationErrors = {};
    if (!valores.producto) validationErrors.producto = "El producto es requerido.";
    if (!valores.proveedor) validationErrors.proveedor = "El proveedor es requerido.";
    if (!valores.cantidad || valores.cantidad <= 0) validationErrors.cantidad = "La cantidad debe ser un número positivo.";
    if (!valores.precio || valores.precio <= 0) validationErrors.precio = "El precio debe ser un número positivo.";
    if (!valores.almacen) validationErrors.almacen = "El almacén es requerido.";
    setErrores(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [valores]);

  const {
    valores,
    errores,
    setErrores,
    handleChange,
    handleSubmit,
    clearForm,
  } = useFormulario({
    producto: '',
    proveedor: '',
    cantidad: '',
    unidadMedida: 'kg',
    precio: '',
    almacen: '',
  }, validar);

  useEffect(() => {
    axios.get("http://localhost:3001/api/inventario")
      .then(response => setInventario(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAdd = () => {
    handleSubmit(() => {
      axios.post("http://localhost:3001/api/inventario", valores)
        .then(response => setInventario(prevInventario => [...prevInventario, response.data]))
        .catch(error => console.error(error));
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/api/inventario/${id}`)
      .then(() => setInventario(prevInventario => prevInventario.filter(item => item.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="inventario-container">
      <h2>Registro de Materiales</h2>
      <div className="inventario-form">
        <input
          type="text"
          name="producto"
          placeholder="Producto"
          value={valores.producto}
          onChange={handleChange}
        />
        {errores.producto && <span className="error">{errores.producto}</span>}
        
        <input
          type="text"
          name="proveedor"
          placeholder="Proveedor"
          value={valores.proveedor}
          onChange={handleChange}
        />
        {errores.proveedor && <span className="error">{errores.proveedor}</span>}
        
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={valores.cantidad}
          onChange={handleChange}
        />
        {errores.cantidad && <span className="error">{errores.cantidad}</span>}
        
        <select
          name="unidadMedida"
          value={valores.unidadMedida}
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
          value={valores.precio}
          onChange={handleChange}
        />
        {errores.precio && <span className="error">{errores.precio}</span>}
        
        <input
          type="number"
          name="almacen"
          placeholder="Almacén"
          value={valores.almacen}
          onChange={handleChange}
        />
        {errores.almacen && <span className="error">{errores.almacen}</span>}
        
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
            <InventarioRow
              key={item.id}
              item={item}
              index={index}
              onEdit={() => console.log("Editar:", item)}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
