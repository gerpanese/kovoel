module.exports = knex => {
  return async params => {
    try {
      return await knex('users').insert({
        name: params.name,
        email: params.email,
        password: params.password
      });
    } catch (error) {
      return error;
    }
  }
}