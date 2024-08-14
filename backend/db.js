
// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'sa', 
    password: ' ',
    database: 'herramienta-financiera'


const mysql = require('mysql');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
>>>>>>> dev
});

connection.connect((err) => {
    if (err) {

        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

module.exports = connection;

        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;

const knex = require('knex');
const config = require('./knexfile.js');  // Asegúrate de que la ruta sea correcta

const mysql = require('mysql');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();


connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
