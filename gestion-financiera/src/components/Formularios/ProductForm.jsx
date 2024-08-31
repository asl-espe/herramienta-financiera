import React, { useState } from 'react';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!product.name.trim()) {
      errors.name = 'El nombre del producto es obligatorio.';
    }

    if (!product.description.trim()) {
      errors.description = 'La descripción es obligatoria.';
    }

    if (!product.price || product.price <= 0) {
      errors.price = 'El precio debe ser un número positivo.';
    }

    if (!product.quantity || product.quantity < 1) {
      errors.quantity = 'La cantidad en inventario debe ser al menos 1.';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Producto registrado:', product);
    
    setProduct({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre del Producto:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        ></textarea>
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          min="0.01"
          step="0.01"
        />
        {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
      </div>
      <div>
        <label htmlFor="quantity">Cantidad en Inventario:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
          min="1"
        />
        {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity}</p>}
      </div>
      <button type="submit">Registrar Producto</button>
    </form>
  );
};

export default ProductForm;
