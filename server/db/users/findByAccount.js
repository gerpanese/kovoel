module.exports = knex => async (acount) => {
  try {
    return await knex('users').where('email');
  } catch (error) {
    return error;
  }
};

