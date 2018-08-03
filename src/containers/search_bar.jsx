import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchMovie(this.state.value);
    this.setState({ value: '' });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
    <input type="text" value={this.state.value} onChange={this.handleChange} className="Form-control form-search" onSubmit={this.handleSubmit}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
