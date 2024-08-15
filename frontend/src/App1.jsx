import React, { useState } from "react";
import RegistroProveedores from "./Components/RegistroMateriales";
import RegistroMateriales from "./Components/RegistroProveedores";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [proveedores, setProveedores] = useState([]);
  const [materiales, setMateriales] = useState([]);
  const [proveedorEditando, setProveedorEditando] = useState(null);
  const [materialEditando, setMaterialEditando] = useState(null);

  const agregarProveedor = (proveedor) => {
    setProveedores([...proveedores, proveedor]);
  };

  const editarProveedor = (index, proveedorActualizado) => {
    const nuevosProveedores = [...proveedores];
    nuevosProveedores[index] = proveedorActualizado;
    setProveedores(nuevosProveedores);
  };

  const eliminarProveedor = (index) => {
    const nuevosProveedores = proveedores.filter((_, i) => i !== index);
    setProveedores(nuevosProveedores);
  };

  const agregarMaterial = (material) => {
    setMateriales([...materiales, material]);
  };

  const editarMaterial = (index, materialActualizado) => {
    const nuevosMateriales = [...materiales];
    nuevosMateriales[index] = materialActualizado;
    setMateriales(nuevosMateriales);
  };

  const eliminarMaterial = (index) => {
    const nuevosMateriales = materiales.filter((_, i) => i !== index);
    setMateriales(nuevosMateriales);
  };

  return (
    <div className="container">
      <RegistroProveedores agregarProveedor={agregarProveedor} />
      <RegistroMateriales
        proveedores={proveedores}
        agregarMaterial={agregarMaterial}
      />
      <h2>Lista de Proveedores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>WhatsApp</th>
            <th>Correo</th>
            <th>Sitio Web</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((prov, index) => (
            <tr key={index}>
              <td>{prov.nombre}</td>
              <td>{prov.direccion}</td>
              <td>{prov.ciudad}</td>
              <td>
                <a href={prov.whatsapp}>WhatsApp</a>
              </td>
              <td>{prov.correo}</td>
              <td>
                <a href={prov.sitioWeb}>Sitio Web</a>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => setProveedorEditando(index)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarProveedor(index)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Lista de Materiales</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre del Producto</th>
            <th>Proveedor</th>
            <th>Cantidad</th>
            <th>Unidad de Medida</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {materiales.map((mat, index) => (
            <tr key={index}>
              <td>{mat.nombreProducto}</td>
              <td>{mat.proveedor}</td>
              <td>{mat.cantidad}</td>
              <td>{mat.unidadMedida}</td>
              <td>{mat.precio}</td>
              <td>{mat.stock}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => setMaterialEditando(index)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarMaterial(index)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
