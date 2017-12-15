import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import './sass/style.scss';

import App from './components/app';
import reducers from './reducers';
import PropTypes from 'prop-types';

import WeatherList from './containers/weather_list';
import WeatherDetail from './containers/weather_detail';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ WeatherList } />
        <Route path="/:cityId" component={ WeatherDetail } />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
