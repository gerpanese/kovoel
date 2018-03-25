const bcrypt = require('bcrypt');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../db/index');
// const url = process.env.DATABASE_URL || 'http://localhost:8000';
const url = process.env.PORT || 'http://localhost:8000';
require('dotenv').config();

module.exports = new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    // callbackURL: `${url}/auth/google/callback`
    callbackURL: `/auth/google/callback`
  },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await db.users.findByAccount(profile.emails[0].value);
        const data = { 
          user,
          accessToken
        };
        if (user.length === 0) {
          const newUser = {
            name: profile.displayName,
            email: profile.emails[0].value,
            password: 'google oauth'
          }
          await db.users.addUser(newUser);
          const registeredUser = await db.users.findByAccount(profile.emails[0].value);
          const data = { 
            user: registeredUser,
            accessToken
          };
          return done(null, data);
        }
        return done(null, data);
      } catch (error) {
        return done(error);
      }
    }
  );