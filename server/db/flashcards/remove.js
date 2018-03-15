module.exports = knex => async (params) => {
  const id = params;
  try {
    return await knex('flashcards')
      .where('id', id)
      .delete();
  } catch (error) {
    return error;
  }
};

