module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'kovoel',
    },
    port: 5432,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seed/`,
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/kovoel`,
    port: 5432,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seed/`,
    },
  },
  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/kovoel`,
    port: 5432,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/migrations`,
    },
    seeds: {
      directory: `${__dirname}/seed/`,
    },
  },
};
