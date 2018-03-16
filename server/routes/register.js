const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../db');

// register page
router.get('/register', (req, res) => res.status(200).send('Register page!'));

// add new user into users table
router.post('/register', async (req, res) => {
  const newUser = req.body;
  newUser.password = await bcrypt.hash(newUser.password, 10);
  await db.users.addUser(newUser);
  res.status(200).end();
});

module.exports = router;
