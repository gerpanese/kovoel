const express = require('express');
const passport = require('passport');
const router = express.Router();

// login page
router.get('/login', (req, res) => res.status(200).send('Login page!'));

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  },
);

module.exports = router;
