
exports.up = knex =>
  knex.schema.createTable('flashcards', (table) => {
    table.increments()
      .index();

    table.integer('user_id')
      .notNullable()
      .index();

    table.string('preview')
      .notNullable()
      .index();

    table.string('translation')
      .notNullable()
      .index();

    table.string('romanji')
      .notNullable()
      .index();

    table.string('note')
      .notNullable()
      .index();

    table.timestamp('created_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });

exports.down = knex =>
  knex.schema.dropTableIfExists('flashcards');
