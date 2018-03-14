const DefaultState = {
  frontText: null,
  backText: null,
};

const reducer = (state = DefaultState, action) => {
  console.log('this is current state in reducer: ', state);
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
      newState.frontText = null;
      newState.backText = null;
      return newState;
    }
    case 'DISCARD_CARD': {
      const newState = getCopyOfState(state);
      newState.frontText = null;
      newState.backText = null;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
