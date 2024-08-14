
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const db = require('./db');
const alertasRouter = require('./alertas');

app.use(cors());
app.use(express.json());

// Obtener el inventario
app.get('/api/inventario', (req, res) => {
    db.query('SELECT * FROM inventario', (err, results) => {
        if (err) {
            res.status(500).send('Error al obtener el inventario');
        } else {
            res.json(results);
        }
    });
});

// Agregar un nuevo producto al inventario
app.post('/api/inventario', (req, res) => {
    const { name, quantity, weight, price, supplier } = req.body;
    const query = 'INSERT INTO inventario (name, quantity, weight, price, supplier) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, quantity, weight, price, supplier], (err, result) => {
        if (err) {
            res.status(500).send('Error al agregar el producto');
        } else {
            res.status(201).json({ id: result.insertId, name, quantity, weight, price, supplier });
        }
    });
});

// Actualizar un producto en el inventario
app.put('/api/inventario/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, quantity, weight, price, supplier } = req.body;
    const query = 'UPDATE inventario SET name = ?, quantity = ?, weight = ?, price = ?, supplier = ? WHERE id = ?';
    db.query(query, [name, quantity, weight, price, supplier, id], (err) => {
        if (err) {
            res.status(500).send('Error al actualizar el producto');
        } else {
            res.json({ id, name, quantity, weight, price, supplier });
        }
    });
});

app.use('/api', alertasRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

let inventario = [];

app.get('/api/inventario', (req, res) => {
    res.json(inventario);
});

app.post('/api/inventario', (req, res) => {
    const producto = req.body;
    inventario.push(producto);
    res.status(201).json(producto);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
