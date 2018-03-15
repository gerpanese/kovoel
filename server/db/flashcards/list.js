module.exports = knex => async () => {
  try {
    return await knex('flashcards').select();
  } catch (error) {
    return error;
  }
};

