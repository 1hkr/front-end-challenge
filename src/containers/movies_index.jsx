import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Aside from '../components/aside';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {

  render () {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <img className="car-logo" src="assets/images/logo_square.svg" alt="car" />
              <div className="car-details">
                <span key={car.id}> {car.brand} - {car.model} </span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);