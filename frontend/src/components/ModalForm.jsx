import React, { useState, useEffect } from 'react';

const ModalForm = ({ product, onSave, onClose }) => {
    const [formState, setFormState] = useState({
        producto: '',
        cantidad: 0,
        peso_volumen: '',
        precio: 0,
        proveedor: '',
        almacen: 0
    });

    useEffect(() => {
        if (product) {
            setFormState(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);
    };

    return (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{product ? 'Editar Producto' : 'Nuevo Producto'}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="producto"
                                    value={formState.producto}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Cantidad</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="cantidad"
                                    value={formState.cantidad}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Peso/Volumen</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="peso_volumen"
                                    value={formState.peso_volumen}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="precio"
                                    value={formState.precio}
                                    onChange={handleChange}
                                    step="0.01"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Proveedor</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="proveedor"
                                    value={formState.proveedor}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Almacen</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="almacen"
                                    value={formState.almacen}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalForm;
