/* global fetch */

const updateFrontText = frontText => ({
  type: 'UPDATE_FRONT_TEXT',
  frontText,
});

const updateBackText = backText => ({
  type: 'UPDATE_BACK_TEXT',
  backText,
});

const saveCardSuccess = result => ({
  type: 'SAVE_CARD',
  result,
});

// should use userId to detect userId
const saveCard = (flashCard, userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`api/users/${userId}/flashcards`, {
        body: JSON.stringify(flashCard),
        headers: { 'content-type': 'application/json' },
        method: 'POST',
      });
      const result = await response.json();
      return saveCardSuccess(result);
    } catch (error) {
      console.error(error);
    }
  };
};

const deleteCard = (id, userId) => {
  fetch(`api/users/${userId}/flashcards/${id}`, {
    method: 'DELETE',
  });

  return {
    type: 'DELETE_CARD',
    id,
  };
};

const updateCard = () => ({
  type: 'UPDATE_CARD',
});

const discardCard = () => ({
  type: 'DISCARD_CARD',
});

export {
  updateFrontText,
  updateBackText,
  saveCard,
  updateCard,
  deleteCard,
  discardCard,
  saveCardSuccess,
};
