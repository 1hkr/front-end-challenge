import React from 'react';
import SearchBar from '../containers/search_bar';
import Movie from '../containers/movie_index';

const App = () => {
  return (
    <div className="app">
      <div className="left-scene">
        <SearchBar/>
        <Movie/>
      </div>
      <div className="right-scene">
      </div>
    </div>
  );
};

export default App;
