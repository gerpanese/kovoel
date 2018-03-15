const addUser = require('./addUser');
const findByAccount = require('./findByAccount');
const findById = require('./findById');

module.exports = knex => ({
  addUser: addUser(knex),
  findByAccount: findByAccount(knex),
  findById: findById(knex),
});

