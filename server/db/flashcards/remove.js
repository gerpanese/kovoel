module.exports = knex => async (id) => {
  try {
    return await knex('flashcards')
      .where('id', id)
      .delete();
  } catch (error) {
    return error;
  }
};

