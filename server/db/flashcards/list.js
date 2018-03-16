module.exports = knex => async (userId) => {
  try {
    return await knex('flashcards')
      .where('user_id', userId)
      .select();
  } catch (error) {
    return error;
  }
};

