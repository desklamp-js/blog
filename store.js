
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import userReducers from './reducers';

// default state of entire application
const defaultState = {
  routing: {
    username: '',
  },
};

// create react router middleware
const newRouter = routerMiddleware(browserHistory);

// apply all middleware for redux
const middleware = applyMiddleware(newRouter);

//create store
export const store = createStore(userReducers, defaultState, middleware);

// sync redux and react router history
export const history = syncHistoryWithStore(browserHistory, store);
