const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (request, response) => {
    console.log('Success!! Google login!');
    response.redirect('http://localhost:3000');
  }
);

module.exports = router;
