// dbconfig.js

const config = {
    user: 'Nelson', // Tu usuario de SQL Server
    password: '123456', // Tu contraseña de SQL Server
    server: 'DESKTOP-SGA0PI5', // Nombre del servidor
    database: 'interculturalidad', // Nombre de la base de datos a la que te quieres conectar
    options: {
        encrypt: false, // Cambia a true si estás usando Azure
        trustServerCertificate: true // Cambia a true si estás en un entorno de desarrollo local
    },
    port: 1433 // Puerto TCP correcto
};

module.exports = config;