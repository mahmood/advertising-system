import { AUTH_USER, LOGOUT, CREATE_USER_FAILED } from '../actions/actionTypes';

const initialState = { loggedIn: false, error: null, registerError: null };

export default function (state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return Object.assign({}, state, { loggedIn: action.loggedIn, data: action.data, error: action.error });
    case LOGOUT:
      return Object.assign({}, state, { loggedIn: false, data: null });
    case CREATE_USER_FAILED:
      return Object.assign({}, state, { registerError: action.error });
    default:
      return state;
  }
}