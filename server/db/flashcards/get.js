module.exports = knex => async (id) => {
  try {
    return await knex('flashcards')
      .where('id', id)
      .select();
  } catch (error) {
    return error;
  }
};

