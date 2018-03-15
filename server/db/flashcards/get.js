module.exports = knex => async (params) => {
  const id = params;
  try {
    return await knex('flashcards')
      .where('id', id)
      .select();
  } catch (error) {
    return error;
  }
};

