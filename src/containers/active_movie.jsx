import React from 'react';
import { connect } from 'react-redux';

const ActiveMovie = (props) => {

  if (!props.activeCity.name) {
    return (
      <div className="active-movie">
        <p>Select a movie...</p>
      </div>
    );
  }

  const title = props.activeMovie.title;
  const overview = props.activeMovie.overview;
  const backgroundPath = `https://kitt.lewagon.com/placeholder/cities/${slug}`;

  return (
    <div className="active-city">
      <h1>{ name }</h1>
      <h3>{ address }</h3>
      <img src={url} width="100%" alt="city" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeMovie: state.activeMovie
  };
}

export default connect(mapStateToProps)(ActiveCity);
