// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',  
    user: 'sa', 
    password: ' ',
    database: 'herramienta-financiera'
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL exitosa');
});

module.exports = connection;
