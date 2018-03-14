const Knex = require('knex');
const config = require('./knexfile');

const knex = Knex({
  client: config.client,
  port: config.port,
  connection: {
    host: config.connection.host,
    database: config.connection.database
  }
});

module.exports = {
  users: require('./users')(knex)
};