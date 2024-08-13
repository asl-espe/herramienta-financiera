const knex = require('knex');
const config = require('./knexfile.js');  // Asegúrate de que la ruta sea correcta

const db = knex(config.development);

module.exports = db;
