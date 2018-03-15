module.exports = knex => {
  return async params => {
    const account = params;
    try {
      return await knex('users').where('email', params);
    } catch (error) {
      return error;
    }
  }
}