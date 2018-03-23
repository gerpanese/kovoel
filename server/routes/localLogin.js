const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../db');

// login page
router.get('/login', (request, response) => {
  response.status(200).send('Login page!');
});


router.post(
  '/login',
  // passport.authenticate('local', { failureRedirect: '/auth/login' }),
  passport.authenticate('local'),
  
  async (request, response) => {
    const user = await db.users.findByAccount(response.req.body.username);
    console.log('id', user[0].id);
    if (user) {
      return response.status(200).send(user);
    }
    return response.status(400).send('Wrong password or email');
    // response.redirect(`http://localhost:3000?id=${user[0].id}`);
  },
);

module.exports = router;
