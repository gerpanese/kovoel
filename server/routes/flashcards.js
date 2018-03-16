const express = require('express');
const db = require('../db');

const router = express.Router();

/* GET all the flashcards. */
router.get('/users/:userId/flashcards', async (request, response) => {
  const { userId } = request.params;
  const flashcards = await db.flashcards.list(userId);
  response.json(flashcards);
});

/* POST a flashcard. */
router.post('/users/:userId/flashcards', (request, response) => {
  try {
    const flashcard = request.body;
    const { userId } = request.body;
    const newFlashcard = {
      user_id: userId,
      translation: flashcard.translation,
      romanji: flashcard.romanji,
      note: flashcard.note,
    };
    db.flashcards.create(newFlashcard);
    response.json({
      userId,
      status: 'success',
    });
  } catch (error) {
    response.status(500).send(error);
  }
});

/* GET a flashcard. */
router.get('/users/:userId/flashcards/:id', async (request, response) => {
  const { id } = request.params;
  const flashcard = await db.flashcards.get(id);
  response.json(flashcard);
});

/* DELETE a flashcard. */
router.delete('/users/:userId/flashcards/:id', (request, response) => {
  try {
    const { id } = request.params;
    db.flashcards.remove(id);
    response.json({
      id,
      status: 'success',
    });
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
