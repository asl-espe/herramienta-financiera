const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let inventario = [];

app.get('/api/inventario', (req, res) => {
    res.json(inventario);
});

app.post('/api/inventario', (req, res) => {
    const producto = req.body;
    inventario.push(producto);
    res.status(201).json(producto);
});

app.put('/api/inventario/:id', (req, res) => {
    const id = req.params.id;
    const productoActualizado = req.body;
    let productoEncontrado = false;

    inventario = inventario.map(producto => {
        if (producto.id === id) {
            productoEncontrado = true;
            return { ...producto, ...productoActualizado };
        }
        return producto;
    });

    if (productoEncontrado) {
        res.json({ message: 'Producto actualizado', producto: productoActualizado });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});