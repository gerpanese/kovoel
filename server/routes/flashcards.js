const express = require('express');
const db = require('../db');

const router = express.Router();

/* GET all the flashcards. */
router.get('/', async (req, res) => {
  const { userId } = req.params;
  const flashcards = await db.flashcards.list(userId);
  res.json(flashcards);
});

/* POST a flashcard. */
router.post('/', (req, res) => {
  try {
    const flashcard = req.body;
    const { userId } = req.body;
    const newFlashcard = {
      userId,
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
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const flashcard = await db.flashcards.get(id);
  res.json(flashcard);
});

/* DELETE a flashcard. */
router.post('/:id', (req, res) => {
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
