import React from 'react';
import SearchBar from '../containers/search_bar';
import Movie from '../containers/movie_index';
import ActiveMovie from '../containers/active_movie'

const App = () => {
  return (
    <div className="app">
      <div className="left-scene">
        <SearchBar/>
        <Movie/>
      </div>
      <div className="right-scene">
        <ActiveMovie/>
      </div>
    </div>
  );
};

export default App;
