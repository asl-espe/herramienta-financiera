const express = require('express');
const cors = require('cors');
const db = require('./db');  // Importa la conexión a la base de datos
// Prueba de conexión
db.raw('SELECT 1')
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Obtener todos los productos del inventario
app.get('/api/inventario', async (req, res) => {
    try {
        const inventario = await db('inventario').select('*');
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el inventario', error });
    }
});

// Agregar un nuevo producto al inventario
app.post('/api/inventario', async (req, res) => {
    const { nombre, cantidad, precio, descripcion } = req.body;
    try {
        const [id] = await db('inventario').insert({ nombre, cantidad, precio, descripcion }).returning('id');
        res.status(201).json({ id, nombre, cantidad, precio, descripcion });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto', error });
    }
});

// Actualizar un producto existente en el inventario
app.put('/api/inventario/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, cantidad, precio, descripcion } = req.body;
    try {
        const updated = await db('inventario').where({ id }).update({ nombre, cantidad, precio, descripcion });
        if (updated) {
            res.json({ message: 'Producto actualizado', id, nombre, cantidad, precio, descripcion });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
});
//eliminar producto
app.delete('/api/inventario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await db('inventario').where({ id }).del();
        if (deleted) {
            res.json({ message: 'Producto eliminado', id });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
