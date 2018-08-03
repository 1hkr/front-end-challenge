import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveMovie extends Component {

//  if (!props.activeMovie.title) {
//    return (
//      <div className="active-movie">
//        <p>Select a movie...</p>
//      </div>
//    );
//  }

render() {
  const title = this.props.activeMovie.title;
  const overview = this.props.activeMovie.overview;
  const vote = this.props.activeMovie.vote_average;
  const url = `https://image.tmdb.org/t/p/w500/${this.props.activeMovie.backdrop_path}`;


  return (
    <div
    className="active-movie"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${url}), center`,
      backgroundSize: 'cover !important',
      backgroundPositionX: 'center'
    }}
    >
      <h1>{ title }</h1>
      <h2>{ vote }</h2>
      <h4>{ overview }</h4>
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
