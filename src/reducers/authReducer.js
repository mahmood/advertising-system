import { AUTH_USER, LOGOUT } from '../actions/actionTypes';

const initialState = {loggedIn: false, error: null};

export default function (state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return Object.assign({}, state, { loggedIn: action.loggedIn, data: action.data, error: action.error });
    case LOGOUT:
      return Object.assign({}, state, {loggedIn: false, data: null});
    default:
      return state;
  }
}