const bcrypt = require('bcrypt');
const passport = require('passport');
const { Strategy } = require('passport-local');
const db = require('../db');

module.exports = new Strategy(async (username, password, done) => {
  try {
    const user = await db.users.findByAccount(username);
    if (user.length === 0) {
      return done(null, false, { message: 'Incorrect account.' });
    }

    const correctPassword = await bcrypt.compare(password, user[0].password);
    if (!correctPassword) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    done(null, user);
  } catch (error) {
    done(error);
  }
});