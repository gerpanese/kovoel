module.exports = knex => {
  return async account => {
    try {
      return await knex('users').where('email', account);
    } catch (error) {
      return error;
    }
  }
}