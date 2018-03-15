module.exports = knex => async (params) => {
  const user = params;
  try {
    return await knex('users').insert({
      name: user.name,
      email: user.email,
      password: user.password,
      created_at: user.created_at,
    });
  } catch (error) {
    return error;
  }
};

