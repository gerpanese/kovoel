const shuffleFlashCards = () => ({
  type: 'SHUFFLE_FLASH_CARDS',
});

const flashCardSuccessfullyLearned = id => ({
  type: 'FLASH_CARD_SUCESSFULLY_LEARNED',
  id,
});

const flashCardFaultyLearned = id => ({
  type: 'FLASH_CARD_FAULTY_LEARNED',
  id,
});

const changePage = page => ({
  type: 'CHANGE_PAGE',
  page,
});

// Should use userId to show flashcards depending on users
const getFlashCards = (userId) => {
  return async (dispatch) => {
    try {
      const flashCardsResponse = await fetch('api/users/1/flashcards');
      const flashCards = await flashCardsResponse.json();
      dispatch(getFlashCardsSuccess(flashCards));
    } catch (error) {
      console.error(error);
    }
  };
};

const getFlashCardsSuccess = flashCards => ({
  type: 'GET_FLASH_CARDS',
  flashCards,
});

export {
  shuffleFlashCards,
  flashCardSuccessfullyLearned,
  flashCardFaultyLearned,
  changePage,
  getFlashCards,
};
