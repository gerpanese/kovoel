const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../db');

router.post(
  '/login',
  passport.authenticate('local'),
  
  async (request, response) => {
    const user = await db.users.findByAccount(response.req.body.username);
    
    if (!user) {
      return response.status(400).send('Wrong password or email');
    }
    return response.status(200).send(user);
  },
);

module.exports = router;
