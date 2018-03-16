module.exports = knex => {
  return async params => {
    try {
      return await knex('users').where('email', params);
    } catch (error) {
      return error;
    }
  }
}