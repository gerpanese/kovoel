module.exports = knex => async (params) => {
  const userId = params;
  try {
    return await knex('flashcards')
      .where('user_id', userId)
      .select();
  } catch (error) {
    return error;
  }
};

