import { combineReducers } from 'redux';
import MovieReducer from './movie_reducer';
import ActiveMovieReducer from './active_movie_reducer';

const rootReducer = combineReducers({
  movie: MovieReducer,
  activeMovie: ActiveMovieReducer
});

export default rootReducer;
