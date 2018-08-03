import React from 'react';
import { bindActionCreators } from 'redux';

const Movie = (props) => {
    return (
      <div className="movie">
      <img src ={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path} />
      <h1>{props.movie.title}</h1>
      </div>
    );
  };


export default Movie;
