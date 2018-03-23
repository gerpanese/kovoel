const express = require('express');
const passport = require('passport');
const router = express.Router();
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const googleLoginStrategy = require('../passport/googleLogin');
const db = require('../db');

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (request, response) => {
    let accessToken = response.req.user.accessToken;
    response.cookie('cookie', accessToken, { maxAge: 900000, httpOnly: false });
    response.redirect(`http://localhost:3000?code=${response.req.query.code}`);
  }
);

router.post('/google/isTokenValid', 
  async (request, response) => {
    if (!response.req.body.email) {
      return response.status(400).send(false);
    };
    const user = await db.users.findByAccount(response.req.body.email);
    console.log(user);
    if (user) {
      return response.status(200).send({ result: true, userid: user[0].id });
    }
  }
);

module.exports = router;
