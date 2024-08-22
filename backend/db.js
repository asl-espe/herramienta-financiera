// Cargar variables de entorno
const dotenv = require('dotenv');
dotenv.config();


module.exports = {
    connection,     // Exporta la conexión MySQL para su uso en otros módulos
    knexInstance    // Exporta la instancia de Knex para consultas
};

// Importar las librerías necesarias
const mysql = require('mysql2');
const knex = require('knex');
const config = require('./knexfile.js');  // Asegúrate de que la ruta sea correcta

// Crear la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: process.env.DB_HOST,        // Dirección del host (por ejemplo, 'localhost')
    user: process.env.DB_USER,        // Usuario de la base de datos (por ejemplo, 'root')
    password: process.env.DB_PASSWORD,// Contraseña del usuario de la base de datos
    database: process.env.DB_NAME     // Nombre de la base de datos
});

// Conectar a la base de datos MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

// Configurar y exportar el objeto Knex para interactuar con la base de datos
const knexInstance = knex(config);
