const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Obtener todos los productos
app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// Obtener un producto por ID
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    db.query('SELECT * FROM products WHERE id = ?', [productId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(result);
    });
});

// Crear un nuevo producto
app.post('/products', (req, res) => {
    const { name, quantity, weight, price, supplier } = req.body;
    const query = 'INSERT INTO products (name, quantity, weight, price, supplier) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, quantity, weight, price, supplier], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: result.insertId });
    });
});

// Actualizar un producto
app.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    const { name, quantity, weight, price, supplier } = req.body;
    const query = 'UPDATE products SET name = ?, quantity = ?, weight = ?, price = ?, supplier = ? WHERE id = ?';
    db.query(query, [name, quantity, weight, price, supplier, productId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'Product updated successfully' });
    });
});

// Eliminar un producto
app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    db.query('DELETE FROM products WHERE id = ?', [productId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'Product deleted successfully' });
    });
});

<<<<<<< HEAD
=======
// Aumentar la cantidad de un producto en el inventario
app.post('/products/:id/add', (req, res) => {
    const productId = req.params.id;
    const { quantity } = req.body;
    
    const query = 'UPDATE products SET quantity = quantity + ? WHERE id = ?';
    db.query(query, [quantity, productId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'Product quantity increased successfully' });
    });
});

// Reducir la cantidad de un producto en el inventario
app.post('/products/:id/remove', (req, res) => {
    const productId = req.params.id;
    const { quantity } = req.body;

    // Primero, verificamos que haya suficiente inventario
    db.query('SELECT quantity FROM products WHERE id = ?', [productId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        const currentQuantity = results[0].quantity;

        if (currentQuantity < quantity) {
            return res.status(400).json({ error: 'Not enough stock available' });
        }

        // Si hay suficiente inventario, reducimos la cantidad
        const query = 'UPDATE products SET quantity = quantity - ? WHERE id = ?';
        db.query(query, [quantity, productId], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.json({ message: 'Product quantity decreased successfully' });
        });
    });
});


>>>>>>> 7b318e0 (Sincronizacion con rama dev)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
