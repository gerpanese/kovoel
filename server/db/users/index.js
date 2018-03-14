const create = require('./create');

module.exports = knex => {
  return {
    create: create(knex)
  }
}