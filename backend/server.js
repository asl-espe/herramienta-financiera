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
    const id = parseInt(req.params.id, 10);
    const updatedProduct = req.body;
    const index = inventario.findIndex(p => p.id === id);

    if (index !== -1) {
        inventario[index] = updatedProduct;
        res.json(updatedProduct);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});