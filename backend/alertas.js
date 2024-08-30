// alertas.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Nivel mínimo global
const NIVEL_MINIMO_GLOBAL = 10;

/**
 * Ruta para obtener alertas de inventario.
 * Verifica los niveles de inventario y genera alertas si algún producto está por debajo de su nivel mínimo.
 */
router.get('/api/alertas', (req, res) => {
    // Consulta para obtener productos con cantidad por debajo de su nivel mínimo
    const query = `
        SELECT id, name, quantity, nivel_minimo 
        FROM inventario 
        WHERE quantity < COALESCE(nivel_minimo, ?)
    `;

    db.query(query, [NIVEL_MINIMO_GLOBAL], (err, results) => {
        if (err) {
            console.error('Error al obtener alertas de inventario:', err);
            return res.status(500).send('Error al obtener alertas de inventario');
        }

        if (results.length === 0) {
            return res.status(200).json({ mensaje: 'No hay productos con niveles bajos de inventario.' });
        }

        const alertas = results.map(producto => {
            const nivelMinimo = producto.nivel_minimo || NIVEL_MINIMO_GLOBAL;
            return {
                id: producto.id,
                name: producto.name,
                quantity: producto.quantity,
                alerta: `El nivel de ${producto.name} es bajo (${producto.quantity}). Nivel mínimo: ${nivelMinimo}.`
            };
        });

        res.json(alertas);
    });
});

/**
 * Ruta para obtener alertas críticas (niveles de inventario extremadamente bajos).
 * Considera una alerta crítica cuando el nivel de inventario es menor al 50% del nivel mínimo configurado.
 */
router.get('/api/alertas/criticas', (req, res) => {
    const query = `
        SELECT id, name, quantity, nivel_minimo 
        FROM inventario 
        WHERE quantity < (COALESCE(nivel_minimo, ?) / 2)
    `;

    db.query(query, [NIVEL_MINIMO_GLOBAL], (err, results) => {
        if (err) {
            console.error('Error al obtener alertas críticas de inventario:', err);
            return res.status(500).send('Error al obtener alertas críticas de inventario');
        }

        if (results.length === 0) {
            return res.status(200).json({ mensaje: 'No hay productos con niveles críticos de inventario.' });
        }

        const alertasCriticas = results.map(producto => {
            const nivelMinimo = producto.nivel_minimo || NIVEL_MINIMO_GLOBAL;
            return {
                id: producto.id,
                name: producto.name,
                quantity: producto.quantity,
                alerta: `ALERTA CRÍTICA: El nivel de ${producto.name} es extremadamente bajo (${producto.quantity}). Nivel mínimo: ${nivelMinimo}.`
            };
        });

        res.json(alertasCriticas);
    });
});
// comentario para la suscribcion de personas en el esitema
module.exports = router;
// hola que hace 