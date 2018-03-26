module.exports = knex => async (user) => {
  try {
    return await knex('users')
    .where({
      name: user.name,
      email: user.email,
    })
    .update({
      password: user.code,
    });
  } catch (error) {
    return error;
  }
};

