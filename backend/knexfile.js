module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',        // Cambia esto por tu usuario de PostgreSQL
        password: '', // Cambia esto por tu contraseña de PostgreSQL
        database: 'inventario_db',  // Este es el nombre de la base de datos que creaste
        port: 5432,
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };
  