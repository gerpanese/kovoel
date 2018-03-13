const DefaultState = {
};

function Reducer(state = DefaultState, action) {
  const getCopyOfState = _state => JSON.parse(JSON.stringify(_state));
  switch (action.type) {
    default:
      return state;
  }
}

module.exports = Reducer;
