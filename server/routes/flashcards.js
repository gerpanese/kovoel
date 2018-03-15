const express = require('express');

const router = express.Router();

/* GET all the flashcards. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

/* GET a flashcard. */
router.get('/:id', (req, res) => {
  res.send('respond with a resource');
});

/* POST a flashcard. */
router.post('/:id', (req, res) => {
  res.send('respond with a resource');
});

/* DELETE a flashcard. */
router.post('/:id', (req, res) => {
  res.send('respond with a resource');
});


module.exports = router;
