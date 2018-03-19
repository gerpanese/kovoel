const bcrypt = require('bcrypt');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../db');
require('dotenv').config();

module.exports = new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:8000/auth/google/callback'
},
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await db.users.findByAccount(profile.emails[0].value);
      if (!user) {
        const newUser = {
          name: profile.displayName,
          email: profile.emails[0].value
        }
        await db.users.addUser(newUser);
        const registeredUser = await db.users.findByAccount(profile.emails[0].value);
        return done(null, registeredUser);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
);