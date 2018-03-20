const express = require('express');
const passport = require('passport');
const router = express.Router();

// login page
router.get('/login', (request, response) => response.status(200).send('Login page!'));

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/auth/login' }),
  (request, response) => {
    response.redirect('http://localhost:3000');
  },
);

module.exports = router;
