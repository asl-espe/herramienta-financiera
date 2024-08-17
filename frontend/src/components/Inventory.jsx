import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalForm from './ModalForm';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/api/inventory')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleAddProduct = () => {
        setSelectedProduct(null);
        setShowModal(true);
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleDeleteProduct = (id) => {
        axios.delete(`http://localhost:3000/api/inventory/${id}`)
            .then(() => setProducts(products.filter(product => product.id !== id)))
            .catch(error => console.error('Error deleting product:', error));
    };

    const handleSaveProduct = (product) => {
        if (selectedProduct) {
            axios.put(`http://localhost:3000/api/inventory/${selectedProduct.id}`, product)
                .then(() => {
                    setProducts(products.map(p => p.id === selectedProduct.id ? product : p));
                    setShowModal(false);
                })
                .catch(error => console.error('Error updating product:', error));
        } else {
            axios.post('http://localhost:3000/api/inventory', product)
                .then(response => {
                    setProducts([...products, { ...product, id: response.data.insertId }]);
                    setShowModal(false);
                })
                .catch(error => console.error('Error adding product:', error));
        }
    };

    return (
        <div>
            <h1>Inventario</h1>
            <button className="btn btn-primary" onClick={handleAddProduct}>Nuevo Producto</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Peso/Volumen</th>
                        <th>Precio</th>
                        <th>Proveedor</th>
                        <th>Almacen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.producto}</td>
                            <td>{product.cantidad}</td>
                            <td>{product.peso_volumen}</td>
                            <td>{product.precio}</td>
                            <td>{product.proveedor}</td>
                            <td>{product.almacen}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => handleEditProduct(product)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <ModalForm
                    product={selectedProduct}
                    onSave={handleSaveProduct}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default Inventory;
