
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('flashcards').del()
    .then(() => {
      // Inserts seed entries
      return knex('flashcards').insert([
        {
          user_id: '1',
          preview: '日本語',
          translation: 'Japanese',
          romanji: 'ni hon go',
          note: 'A language used in Japan',
        },
        {
          user_id: '1',
          preview: 'ドイツ',
          translation: 'German',
          romanji: 'do i tsu',
          note: 'A friend contry of Japan',
        },
        {
          user_id: '1',
          preview: '始めましょう',
          translation: 'Start',
          romanji: 'hajime ma sho',
          note: 'Used when lunch time start',
        },
        {
          user_id: '1',
          preview: '分かりません',
          translation: 'I do not understand',
          romanji: 'wakari ma sen',
          note: 'Always used when coding',
        },
      ]);
    })
);
