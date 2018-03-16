module.exports = knex => {
  return async params => {
    try {
      return await knex('users').where('id', params);
    } catch (error) {
      return error;
    }
  }
}