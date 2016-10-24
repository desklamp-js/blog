import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// initial application state
const initialState = {};

// reducer
function user(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_USERNAME': {
      const event = action.payload.nativeEvent;
      const newUser = event.target[0].value;
      return Object.assign({}, state, { username: newUser });
    }

    default:
      return state;
  }
}

const userReducers = combineReducers({ user, routing: routerReducer });

export default userReducers;
