const updateFrontText = frontText => ({
  type: 'UPDATE_FRONT_TEXT',
  frontText,
});

const updateBackText = backText => ({
  type: 'UPDATE_BACK_TEXT',
  backText,
});

const saveCard = () => ({
  type: 'SAVE_CARD',
});

const updateCard = () => ({
  type: 'UPDATE_CARD',
});

const discardCard = () => ({
  type: 'DISCARD_CARD',
});

const deleteCard = id => ({
  type: 'DELETE_CARD',
  id,
});

export {
  updateFrontText,
  updateBackText,
  saveCard,
  updateCard,
  deleteCard,
  discardCard,
};
