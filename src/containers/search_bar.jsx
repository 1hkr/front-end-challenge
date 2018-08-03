import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';
import Movie from '../containers/movie_index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.fetchMovie(this.state.value);
  }

  render() {
    console.log(this.props.movie)
    return (
    <div className="left-scene">
      <input type="text" value={this.state.value} onChange={this.handleChange} className="Form-control form-search"/>
      <Movie movie={this.props.movie}/>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}


function mapStateToProps(state) {
  return {
    movie: state.movie
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
