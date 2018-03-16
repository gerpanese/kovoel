module.exports = {
  // database connection configs
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'kovoel',
    },
    port: 5432,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/kovoel`,
    port: 5432,
  },
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/kovoel`,
    port: 5432,
  }
}