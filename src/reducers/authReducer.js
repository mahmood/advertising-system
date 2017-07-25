import { AUTH_USER, LOGOUT, CREATE_USER_FAILED, CREATE_USER_SUCCESS } from '../actions/actionTypes';

const initialState = { loggedIn: false, error: null, isLoading: false, registerError: null };

export default function (state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return Object.assign({}, state, { loggedIn: action.loggedIn, isLoading: action.isLoading, data: action.data, error: action.error });
    case LOGOUT:
      return Object.assign({}, state, { loggedIn: false, data: null });
    case CREATE_USER_FAILED:
      return Object.assign({}, state, { registerError: action.error });
    case CREATE_USER_SUCCESS:
      return Object.assign({}, state, { isLoading: action.isLoading });
    default:
      return state;
  }
}