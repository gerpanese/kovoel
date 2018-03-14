module.exports = knex => {
  return async params => {
    const account = params;
    try {
      const id = await knex('users').where('id', params);
      return id;
    } catch (error) {
      return error;
    }
  }
}