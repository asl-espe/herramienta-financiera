module.exports = (connection) => {
    const express = require('express');
    const router = express.Router();

    // GET all products
    router.get('/', (req, res) => {
        connection.query('SELECT * FROM products', (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    });

    // POST new product
    router.post('/', (req, res) => {
        const { producto, cantidad, peso_volumen, precio, proveedor, almacen } = req.body;
        connection.query(
            'INSERT INTO products (producto, cantidad, peso_volumen, precio, proveedor, almacen) VALUES (?, ?, ?, ?, ?, ?)',
            [producto, cantidad, peso_volumen, precio, proveedor, almacen],
            (err) => {
                if (err) throw err;
                res.send('Product added!');
            }
        );
    });

    // PUT update product
    router.put('/:id', (req, res) => {
        const { producto, cantidad, peso_volumen, precio, proveedor, almacen } = req.body;
        connection.query(
            'UPDATE products SET producto = ?, cantidad = ?, peso_volumen = ?, precio = ?, proveedor = ?, almacen = ? WHERE id = ?',
            [producto, cantidad, peso_volumen, precio, proveedor, almacen, req.params.id],
            (err) => {
                if (err) throw err;
                res.send('Product updated!');
            }
        );
    });

    // DELETE a product
    router.delete('/:id', (req, res) => {
        connection.query('DELETE FROM products WHERE id = ?', [req.params.id], (err) => {
            if (err) throw err;
            res.send('Product deleted!');
        });
    });

    return router;
};