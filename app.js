// testConnection.js
const sql = require('mssql');
const config = require('./dbconfig');

async function testConnection() {
    try {
        let pool = await sql.connect(config);
        console.log('Conexión exitosa a SQL Server');
        sql.close();
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}

testConnection();
