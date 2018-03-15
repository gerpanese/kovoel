exports.seed = knex => (
  // Deletes ALL existing entries
  knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Christian',
          email: 'tabemasho@gmail.com',
          password: '1234',
        },
      ]);
    })
);
