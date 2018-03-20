const express = require('express');
const passport = require('passport');
const router = express.Router();

// login page
<<<<<<< HEAD
// router.get('/login', (req, res) => res.status(200).send('Login page!'));
=======
router.get('/login', (request, response) => response.status(200).send('Login page!'));
>>>>>>> master

router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/auth/login' }),
<<<<<<< HEAD
  (req, res) => {
    console.log('Success!! Local login!');
    // res.redirect('http://127.0.0.1:3000/');
    res.redirect('http://localhost:3000');
=======
  (request, response) => {
    response.redirect('/');
>>>>>>> master
  },
);

module.exports = router;
