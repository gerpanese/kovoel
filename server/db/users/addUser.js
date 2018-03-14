module.exports = knex => {
  return async params => {
    const user = params;
    try {
      const userInfo = await knex('users').insert({
        name: user.name,
        email: user.email,
        password: user.password,
        created_at: user.created_at
      });
      return userInfo;       
    } catch (error) {
      return error;
    }
  }
}