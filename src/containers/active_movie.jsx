import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveMovie extends Component {

render() {
 if (!this.props.activeMovie.title) {
  return (
  <div className="active-movie">
    <p>Click on a movie to learn more...</p>
    </div>
    );
}


  const title = this.props.activeMovie.title;
  const overview = this.props.activeMovie.overview;
  const vote = this.props.activeMovie.vote_average;
  const url = `https://image.tmdb.org/t/p/w500/${this.props.activeMovie.backdrop_path}`;
  const OV = this.props.activeMovie.original_language;
  const date = this.props.activeMovie.release_date;


  return (
    <div className="right-scene">
    <div
    className="active-movie"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${url})`,
      backgroundSize: 'cover',
      backgroundPositionX: 'center'
    }}
    >
      <h1>{ title }</h1>
      <div className="vote">
        <h3>{ vote }</h3>
      </div>
      <h4>{ overview }</h4>
      <p>Version: {OV.toUpperCase()}, {date.substr(0,4)}</p>
    </div>
    </div>
  );
};
}

  function mapStateToProps(state) {
    return {
      activeMovie: state.activeMovie
    };
  }


export default connect(mapStateToProps)(ActiveMovie);
