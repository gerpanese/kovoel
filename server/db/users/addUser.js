module.exports = knex => {
  return async user => {
    try {
      return await knex('users').insert({
        name: user.name,
        email: user.email,
        password: user.password
      });
    } catch (error) {
      return error;
    }
  }
}