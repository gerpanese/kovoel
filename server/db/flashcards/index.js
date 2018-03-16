const list = require('./list');
const get = require('./get');
const create = require('./create');
const remove = require('./remove');

module.exports = knex => ({
  list: list(knex),
  get: get(knex),
  create: create(knex),
  remove: remove(knex),
});

