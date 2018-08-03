import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

// components

// containers

// reducers

const initialState = {
  movie: [{ id: 1, vote_average: '8.5', title: 'douceur', poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', overview: 'incredible movie' }]
};

const reducers = combineReducers({
  cars: (state = null, action) => state,
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        TODO
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
