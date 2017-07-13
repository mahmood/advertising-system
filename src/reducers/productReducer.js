import { ADD_PRODUCT, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAILED, FETCH_CATEGORIES_SUCCESS } from '../actions/actionTypes';

const initialState = { data: null, cat: null, error: null };


export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PHOTO_SUCCESS:
      return Object.assign({}, state, { isLoading: action.isLoading , data: action.data });
    case FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, { cat: action.cat });
    default:
      return state;
  }
}