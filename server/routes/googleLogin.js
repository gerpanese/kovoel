const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../db');
const url = 'http://kovoel-pr-31.herokuapp.com' || 'http://localhost:3000';

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (request, response) => {
    let accessToken = response.req.user.accessToken;
    response.cookie('cookie', accessToken, { maxAge: 900000, httpOnly: false });
    response.redirect(`${url}?code=${response.req.query.code}`);
  }
);

router.post('/google/isTokenValid', 
  async (request, response) => {
    if (!response.req.body.email) {
      return response.status(400).send(false);
    };
    const user = await db.users.findByAccount(response.req.body.email);
    
    if (user) {
      return response.status(200).send({ result: true, userid: user[0].id });
    }
  }
);

module.exports = router;
