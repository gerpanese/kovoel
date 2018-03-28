import LearnShuffling from '../utils/LearnShuffling';

const DefaultState = {
  errorMessage: 'わかりません もいちど',
  languageCode: 'ja-JP',
  currentFlashCard: null,
  shuffledFlashCards: [],

  currentPage: 'landingPage',

  flashCards: [],

  userStatistic: [
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-01-17T03:24:00'),
      id: 1,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-02-17T03:24:00'),
      id: 3,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-03-17T03:24:00'),
      id: 2,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-01-17T03:24:00'),
      id: 1,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-02-17T03:24:00'),
      id: 3,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-03-17T03:24:00'),
      id: 2,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-01-17T03:24:00'),
      id: 1,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-02-17T03:24:00'),
      id: 3,
    },
    {
      state: 'FAILED',
      timestamp: +new Date('2018-03-17T03:24:00'),
      id: 2,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-01-17T03:24:00'),
      id: 1,
    },
    {
      state: 'SUCCESS',
      timestamp: +new Date('2018-02-17T03:24:00'),
      id: 3,
    },
    {
      state: 'FAILED',
      timestamp: +new Date('2018-03-17T03:24:00'),
      id: 2,
    },
  ],
  frontText: '',
  backText: '',

  // @todo we need to make this dynamic
  isUserLoggedIn: false,
  userId: null,
};

const reducer = (state = DefaultState, action) => {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    case 'SET_IS_LOGGED_IN': {
      const newState = getCopyOfState(state);
      newState.isUserLoggedIn = true;
      return newState;
    }

    case 'SET_USER_ID': {
      const newState = getCopyOfState(state);
      newState.userId = action.userId;
      return newState;
    }

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

      let maxUsedId = 0;
      newState.flashCards.forEach((card) => {
        if (card.id >= maxUsedId) {
          maxUsedId = card.id;
        }
      });
      newState.flashCards.push({
        id: maxUsedId + 1, // @todo move this into the server-side
        preview: newState.frontText,
        translation: newState.backText,
        romanji: '', // @todo is missing
      });

      newState.frontText = '';
      newState.backText = '';
      return newState;
    }

    case 'UPDATE_CARD': {
      const newState = getCopyOfState(state);

      const currentCard = newState.flashCards.filter(card => card.id === newState.currentFlashCard.id)[0];
      currentCard.preview = newState.frontText ? newState.frontText : currentCard.preview;
      currentCard.translation = newState.backText ? newState.backText : currentCard.translation;
      currentCard.romanji = ''; // @todo is missing

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
      if (action.id !== null) {
        newState.currentFlashCard = newState.flashCards
          .filter(card => card.id === action.id)[0];
      } else {
        newState.currentFlashCard = null;
      }
      return newState;
    }

    case 'DELETE_CARD': {
      const newState = getCopyOfState(state);
      newState.flashCards = newState.flashCards
        .filter(flashcard => flashcard.id !== action.id);

      if (
        newState.currentFlashCard !== null &&
        newState.currentFlashCard.id === action.id
      ) {
        newState.currentFlashCard = null;
      }
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
