const DefaultState = {
  errorMessage: 'わかりません',
  languageCode: 'ja-JP',
  currentFlashCard: { id: 1, preview: '日本語', translation: 'japanisch', romanji: 'nihongo' },

  flashCards: [
    { id: 1, preview: '日本語', translation: 'japanisch', romanji: 'nihongo' },
    { id: 2, preview: '見ました', translation: 'seen', romanji: 'mimashita' },
    { id: 3, preview: '日曜日', translation: 'inside', romanji: 'nichiyobi' },
    { id: 4, preview: '本', translation: 'book', romanji: 'hon' },
  ],

  userStatistic: [],
};

function Reducer(state = DefaultState, action) {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'FLASH_CARD_SUCESSFULLY_LEARNED': {
      const newState = getCopyOfState(state);
      const nextId = newState.currentFlashCard.id + 1;

      // store into the user-statistic
      newState.userStatistic.push({
        state: 'SUCCESS',
        id: newState.currentFlashCard.id,
      });

      // @todo make nice
      let nextFlashCard = newState.flashCards
        .filter(flashCard => flashCard.id === nextId)[0];
      if (!nextFlashCard) {
        nextFlashCard = newState.flashCards.filter(flashCard => flashCard.id === 1)[0];
      }

      newState.currentFlashCard = nextFlashCard;

      return newState;
    }

    case 'FLASH_CARD_FAULTY_LEARNED': {
      const newState = getCopyOfState(state);

      // store into the user-statistic
      newState.userStatistic.push({
        state: 'FAULTY',
        id: newState.currentflashCard.id,
      });

      return newState;
    }

    default:
      return state;
  }
}

module.exports = Reducer;
