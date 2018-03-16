
exports.up = knex =>
  knex.schema.createTable('users', (table) => {
    table.increments()
      .index();

    table.string('name', 255)
      .notNullable()
      .index();

    table.string('email', 255)
      .notNullable()
      .index();

    table.string('password', 10)
      .notNullable()
      .index();

    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });

exports.down = knex =>
  knex.schema.dropTableIfExists('users');
