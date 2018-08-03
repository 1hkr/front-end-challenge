import React from 'react';
import SearchBar from '../containers/search_bar';
import ActiveMovie from '../containers/active_movie'

const App = () => {
  return (
    <div className="app">
        <SearchBar/>
      <div className="right-scene">
        <ActiveMovie/>
      </div>
    </div>
  );
};

export default App;
