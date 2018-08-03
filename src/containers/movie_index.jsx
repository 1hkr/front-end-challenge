import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveMovie } from '../actions/index';

class Movie extends Component {
  render () {
    return (
      <div className="movie" onClick={() => this.props.setActiveMovie(this.props.movie)}>
      <img src ={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path} />
      <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveMovie },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Movie);
