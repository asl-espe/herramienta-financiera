import React from 'react';
import './App.css';

const Table = () => {
  const products = [
    { id: 1, name: 'Producto 1', quantity: 100, weight: 1.50, price: 9.99, supplier: 'Proveedor 1', createdAt: '2024-08-13 20:47:22' },
    { id: 2, name: 'Producto 2', quantity: 200, weight: 0.50, price: 19.99, supplier: 'Proveedor 2', createdAt: '2024-08-13 20:47:22' },
    // ... más productos
  ];

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Supplier</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nOMBRE}</td>
              <td>{product.cantidad}</td>
              <td>{product.weight}</td>
              <td>{product.price}</td>
              <td>{product.supplier}</td>
              <td>{product.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
