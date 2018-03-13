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

const discardCard = () => ({
  type: 'DISCARD_CARD',
});

export {
  updateFrontText,
  updateBackText,
  saveCard,
  discardCard,
};
