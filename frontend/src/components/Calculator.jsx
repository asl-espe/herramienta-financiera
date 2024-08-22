import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Calculator() {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [productName, setProductName] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Fetch materials from the inventory API
    axios.get('http://localhost:3000/api/inventory')
      .then(response => setMaterials(response.data))
      .catch(error => console.error('Error fetching materials:', error));
  }, []);

  const handleAddMaterial = (materialId, quantity) => {
    const material = materials.find(m => m.id === materialId);
    const updatedMaterials = [...selectedMaterials, { ...material, quantity }];
    setSelectedMaterials(updatedMaterials);
    calculateTotalPrice(updatedMaterials);
  };

  const calculateTotalPrice = (materials) => {
    const price = materials.reduce((total, material) => {
      return total + material.precio * material.quantity;
    }, 0);
    setTotalPrice(price);
  };

  const handleSaveProduct = () => {
    axios.post('http://localhost:3000/api/calcular-producto', {
      nombre_producto: productName,
      materiales: selectedMaterials
    })
    .then(() => alert('Producto calculado y guardado con éxito'))
    .catch(error => console.error('Error saving product:', error));
  };

  return (
    <div className="calculator">
      <h2>Calculadora de Productos</h2>
      
      <input 
        type="text" 
        placeholder="Nombre del Producto"
        value={productName}
        onChange={e => setProductName(e.target.value)}
        className="form-control mb-3"
      />
      
      <select onChange={e => handleAddMaterial(parseInt(e.target.value), 1)} className="form-select mb-3">
        <option value="">Seleccionar Material</option>
        {materials.map(material => (
          <option key={material.id} value={material.id}>
            {material.producto} - ${material.precio} por {material.peso_volumen}
          </option>
        ))}
      </select>

      <ul className="list-group mb-3">
        {selectedMaterials.map((material, index) => (
          <li key={index} className="list-group-item">
            {material.producto} - {material.quantity} {material.peso_volumen} - ${material.precio * material.quantity}
          </li>
        ))}
      </ul>

      <h3>Precio Total: ${totalPrice.toFixed(2)}</h3>

      <button onClick={handleSaveProduct} className="btn btn-success">Guardar Producto</button>
    </div>
  );
}

export default Calculator;
