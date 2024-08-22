const express = require('express');
const router = express.Router();

module.exports = (connection) => {

    // Ruta del backend para calcular y guardar un nuevo producto
    router.post('/calcular-producto', (req, res) => {
        const { nombre_producto, materiales } = req.body;

        // Lógica para calcular el precio final y guardar el producto en una nueva tabla
        const totalPrecio = materiales.reduce((total, material) => {
            return total + (material.precio * material.quantity);
        }, 0);

        // Guardar el producto calculado en la tabla "productos_calculados"
        connection.query(
            'INSERT INTO productos_calculados (nombre_producto, precio_total, materiales) VALUES (?, ?, ?)',
            [nombre_producto, totalPrecio, JSON.stringify(materiales)],
            (err) => {
                if (err) throw err;
                res.send('¡Producto calculado y guardado!');
            }
        );
    });

    return router;
};