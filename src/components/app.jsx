import React from 'react';
import MovieIndex from '../containers/movie_index';
import ActiveMovie from '../containers/active_movie'

const App = () => {
  return (
    <div className="app">
        <MovieIndex/>
        <ActiveMovie/>
    </div>
  );
};

export default App;
