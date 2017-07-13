import { ADD_PRODUCT, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAILED, FETCH_CATEGORIES_SUCCESS, SEARCH } from '../actions/actionTypes';

const initialState = { data: null, cat: null, error: null };


export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PHOTO_SUCCESS:
      return Object.assign({}, state, { isLoading: action.isLoading , data: action.data, currentCat: action.currentCat });
    case FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, { cat: action.cat });
    case SEARCH:
      return Object.assign({}, state, { data: action.data });
    default:
      return state;
  }
}