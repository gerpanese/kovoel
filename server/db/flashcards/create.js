module.exports = knex => async (flashcard) => {
  try {
    return await knex('flashcards').insert({
      user_id: flashcard.user_id,
      preview: flashcard.preview,
      translation: flashcard.translation,
      romanji: flashcard.romanji,
      note: flashcard.note,
    });
  } catch (error) {
    return error;
  }
};
