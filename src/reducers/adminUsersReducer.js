import {
  FETCH_ADMIN_USERS_SUCCESS,
  DELETE_ADMIN_USER_SUCCESS
} from '../actions/actionTypes';

const initialState = { data: [] }; 

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ADMIN_USERS_SUCCESS:
      return Object.assign({}, state, { data: action.data });
    case DELETE_ADMIN_USER_SUCCESS: 
      let newState = state.data.filter(user => user.id !== action.id);
      return Object.assign({}, state, { data: newState });
    default:
      return state;
  }
};