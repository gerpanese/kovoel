module.exports = knex => async (flashcard) => {
  try {
    return await knex('flashcards').insert({
      user_id: flashcard.user_id,
      preview: flashcard.preview,
      translation: flashcard.password,
      romanji: flashcard.password,
      note: flashcard.password,
      created_at: flashcard.created_at,
    });
  } catch (error) {
    return error;
  }
};
