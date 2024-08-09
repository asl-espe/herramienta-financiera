const express = require('express');
const router = express.Router();

// Nivel mínimo de inventario para generar una alerta
const NIVEL_MINIMO = 10;

// Función para verificar los niveles de inventario y generar alertas
router.get('/api/alertas', (req, res) => {
    const inventario = req.app.get('inventario');

    const alertas = inventario
        .filter(producto => producto.quantity < NIVEL_MINIMO)
        .map(producto => ({
            id: producto.id,
            name: producto.name,
            quantity: producto.quantity,
            alerta: `El nivel de ${producto.name} es bajo (${producto.quantity}).`
        }));

    res.json(alertas);
});

module.exports = router;
