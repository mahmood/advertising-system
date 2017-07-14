import {
  ADD_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILED,
  FETCH_CATEGORIES_SUCCESS,
  SEARCH
} from '../actions/actionTypes';

const initialState = {
  data: null,
  cat: null,
  error: null,
  term: null
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: action.isLoading,
        data: action.data,
        currentCat: action.currentCat,
        term: action.term
      });
    case FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        cat: action.cat
      });
    case SEARCH:
      return Object.assign({}, state, {
        data: action.data,
        term: action.term
      });
    default:
      return state;
  }
}