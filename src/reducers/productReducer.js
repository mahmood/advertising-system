import { ADD_PRODUCT, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAILED } from '../actions/actionTypes';

const initialState = { data: null, error: null };


export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PHOTO_SUCCESS:
      return Object.assign({}, state, { isLoading: action.isLoading , data: action.data });
    default:
      return state;
  }
}