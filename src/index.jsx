// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// reducers
import reducers from './reducers'


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  movie: {
    id:1,
    title: "The Jungle Book",
    poster_path: "/vOipe2myi26UDwP978hsYOrnUWC.jpg",
    overview:"A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo.",
    backdrop_path: "/eIOTsGg9FCVrBc4r2nXaV61JF4F.jpg",
    vote_average: 6.8,
    original_language: "en"
  },
  activeMovie:{}
};


const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
