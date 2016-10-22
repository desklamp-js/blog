import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// initial application state
const initialState = {};

// reducer
function userReducer(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_USERNAME': {
      return Object.assign({}, state, { username: action.username });
    }

    default:
      return state;
  }
}

const userReducers = combineReducers({ userReducer, routing: routerReducer });

export default userReducers;
