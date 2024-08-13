// alertas.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Nivel mínimo de inventario para generar una alerta
const NIVEL_MINIMO = 10;

// Función para verificar los niveles de inventario y generar alertas
router.get('/api/alertas', (req, res) => {
    const query = 'SELECT id, name, quantity FROM inventario WHERE quantity < ?';
    db.query(query, [NIVEL_MINIMO], (err, results) => {
        if (err) {
            res.status(500).send('Error al obtener alertas de inventario');
        } else {
            const alertas = results.map(producto => ({
                id: producto.id,
                name: producto.name,
                quantity: producto.quantity,
                alerta: `El nivel de ${producto.name} es bajo (${producto.quantity}).`
            }));
            res.json(alertas);
        }
    });
});

module.exports = router;
