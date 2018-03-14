module.exports = knex => {
  return async params => {
    const account = params;
    try {
      const user = await knex('users').where('email', params);
      return user;
    } catch (error) {
      return error;
    }
  }
}