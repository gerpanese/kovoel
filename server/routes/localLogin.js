const express = require('express');
const passport = require('passport');
const router = express.Router();

// login page
// router.get('/login', (req, res) => res.status(200).send('Login page!'));

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/auth/login' }),
  (req, res) => {
    console.log('Success!! Local login!');
    // res.redirect('http://127.0.0.1:3000/');
    res.redirect('http://localhost:3000');
  },
);

module.exports = router;
