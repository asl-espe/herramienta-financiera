const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const inventoryRoutes = require('./gestion-inventario');
const calculadoraRouter = require('./routes/calculadora');

const app = express();

app.use(cors()); // Permitir todas las solicitudes CORS
app.use(express.json()); // Middleware para parsear JSON

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ddbb_gestionfinanciera'
});

connection.connect(err => {
    if (err) {
        console.error('Error de conexión: ', err);
        return;
    }
    console.log('Conectado a la base de datos.');
});

// Usar las rutas de inventario, pasándole la conexión
app.use('/api/inventory', inventoryRoutes(connection));

// Modificar la ruta de la calculadora para que reciba la conexión
app.use('/api', calculadoraRouter(connection));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
