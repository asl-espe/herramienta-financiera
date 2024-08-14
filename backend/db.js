
const mysql = require('mysql');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
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

