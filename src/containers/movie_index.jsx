import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Movie extends Component {

  render() {
    return (
      <div className="movie">
      <img src ={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path} />
      <h1>{this.props.movie.title}</h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movie: state.movie
  };
}


export default connect(mapStateToProps)(Movie);
