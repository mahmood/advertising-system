import { FETCH_ADMIN_ADS_SUCCESS, FETCH_ADMIN_ADS_FAILED, DELETE_ADMIN_PRODUCT_SUCCESS } from '../actions/actionTypes';

const initialState = { data: null };

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_ADMIN_ADS_SUCCESS: 
      return Object.assign({}, state, { data: action.data });
    case DELETE_ADMIN_PRODUCT_SUCCESS:
      return state.data.filter(product => product.id !== action.id);
    default:
      return state;
  }
};