import LearnShuffling from '../utils/LearnShuffling';

const DefaultState = {
  errorMessage: 'わかりません もいちど',
  languageCode: 'ja-JP',
  currentFlashCard: null,
  shuffledFlashCards: [],

  currentPage: 'landingPage',

  flashCards: [],

  userStatistic: [],
  frontText: '',
  backText: '',

  // @todo we need to make this dynamic
  isUserLoggedIn: true,
};

const reducer = (state = DefaultState, action) => {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'UPDATE_FRONT_TEXT': {
      const newState = getCopyOfState(state);
      newState.frontText = action.frontText;
      return newState;
    }

    case 'UPDATE_BACK_TEXT': {
      const newState = getCopyOfState(state);
      newState.backText = action.backText;
      return newState;
    }

    case 'SAVE_CARD': {
      const newState = getCopyOfState(state);
      newState.frontText = '';
      newState.backText = '';
      return newState;
    }

    case 'DISCARD_CARD': {
      const newState = getCopyOfState(state);
      newState.frontText = '';
      newState.backText = '';
      return newState;
    }

    case 'CHANGE_PAGE': {
      const newState = getCopyOfState(state);
      newState.currentPage = action.page;
      return newState;
    }

    case 'DELETE_CARD': {
      const newState = getCopyOfState(state);
      newState.flashCards = newState.flashCards
        .filter(flashcard => flashcard.id !== action.id);
      return newState;
    }

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
        timestamp: +new Date(),
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
        timestamp: +new Date(),
        id: newState.currentFlashCard.id,
      });

      return newState;
    }

    case 'GET_FLASH_CARDS': {
      const newState = getCopyOfState(state);
      newState.flashCards = action.flashCards;
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
