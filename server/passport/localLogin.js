const bcrypt = require('bcrypt');
const passport = require('passport');
const { Strategy } = require('passport-local');
const db = require('../db');

module.exports = new Strategy(async (account, password, done) => {
  try {
    const user = await db.users.findByAccount(account);
    if (!user) {
      return done(null, false, { message: 'Incorrect account.' });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
});