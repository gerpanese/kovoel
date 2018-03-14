import LearnShuffling from '../utils/LearnShuffling';

const DefaultState = {
  errorMessage: 'わかりません。もいちど',
  languageCode: 'ja-JP',
  currentFlashCard: null,
  shuffledFlashCards: [],


  flashCards: [
    { id: 1, preview: '日本語', translation: 'japanisch', romanji: 'nihongo' },
    { id: 2, preview: '見ました', translation: 'seen', romanji: 'mimashita' },
    { id: 3, preview: '日曜日', translation: 'sunday', romanji: 'nichiyobi' },
    { id: 4, preview: 'ドイツ', translation: 'germany', romanji: 'doitsu' },
  ],

  userStatistic: [],
};

function Reducer(state = DefaultState, action) {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'SHUFFLE_FLASH_CARDS': {

      const newState = getCopyOfState(state);
      const learnShuffling = new LearnShuffling(newState.flashCards);
      newState.shuffledFlashCards = getCopyOfState(learnShuffling.doShuffle());
      newState.currentFlashCard = newState.shuffledFlashCards.shift(); 
      return newState;
    }

    case 'FLASH_CARD_SUCESSFULLY_LEARNED': {
      const newState = getCopyOfState(state);

      // store into the user-statistic
      newState.userStatistic.push({
        state: 'SUCCESS',
        id: newState.currentFlashCard.id,
      });

      newState.currentFlashCard = newState.shuffledFlashCards.shift();

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
