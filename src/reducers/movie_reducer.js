const movieReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'FETCH_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;
