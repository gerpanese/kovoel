module.exports = knex => async (params) => {
  const id = params;
  try {
    return await knex('users')
      .where('id', id)
      .select();
  } catch (error) {
    return error;
  }
};

