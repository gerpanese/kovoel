module.exports = knex => async (email) => {
  try {
    return await knex('users').where('email', email);
  } catch (error) {
    return error;
  }
};

