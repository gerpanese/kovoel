module.exports = knex => {
  return async id => {
    try {
      return await knex('users').where('id', id);
    } catch (error) {
      return error;
    }
  }
}