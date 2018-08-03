const activeMovieReducer = (state, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_ACTIVE_MOVIE':
      return action.payload;
    default:
      return state;
  }
};

export default activeMovieReducer;
