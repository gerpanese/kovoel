const express = require('express');
const db = require('../db');

const router = express.Router();

/* GET all the flashcards. */
router.get('/users/:userId/flashcards', async (req, res) => {
  const { userId } = req.params;
  const flashcards = await db.flashcards.list(userId);
  res.json(flashcards);
});

/* POST a flashcard. */
router.post('/users/:userId/flashcards', (req, res) => {
  try {
    const flashcard = req.body;
    const { userId } = req.body;
    const newFlashcard = {
      user_id: userId,
      translation: flashcard.translation,
      romanji: flashcard.romanji,
      note: flashcard.note,
    };
    db.flashcards.create(newFlashcard);
    res.json({
      userId,
      status: 'success',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

/* GET a flashcard. */
router.get('/users/:userId/flashcards/:id', async (req, res) => {
  const { id } = req.params;
  const flashcard = await db.flashcards.get(id);
  res.json(flashcard);
});

/* DELETE a flashcard. */
router.delete('/users/:userId/flashcards/:id', (req, res) => {
  try {
    const { id } = req.params;
    db.flashcards.remove(id);
    res.json({
      id,
      status: 'success',
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
