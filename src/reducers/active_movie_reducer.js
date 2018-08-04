const activeMovieReducer = (state = null, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'MOVIE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default activeMovieReducer;
