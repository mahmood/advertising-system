import {
  FETCH_ADMIN_CATS_SUCCESS,
  DELETE_ADMIN_CATS_SUCCESS
} from '../actions/actionTypes';

const initialState = { data: [] }; 

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ADMIN_CATS_SUCCESS:
      return Object.assign({}, state, { data: action.data.data });
    case DELETE_ADMIN_CATS_SUCCESS:
      let newState = state.data.filter(cat => cat.id !== action.id);
      return Object.assign({}, state, { data: newState });
    default:
      return state;
  }
};