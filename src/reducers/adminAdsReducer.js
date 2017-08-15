import { FETCH_ADMIN_ADS_SUCCESS, FETCH_ADMIN_ADS_FAILED, DELETE_ADMIN_PRODUCT_SUCCESS, VERIFY_ADMIN_PRODUCT_SUCCESS } from '../actions/actionTypes';

const initialState = { data: [] };

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_ADMIN_ADS_SUCCESS: 
      return Object.assign({}, state, { data: action.data });
    case DELETE_ADMIN_PRODUCT_SUCCESS:
      let newDeleteState = state.data.filter(product => product.id !== action.id);
      return Object.assign({}, state, { data: newDeleteState });
    case VERIFY_ADMIN_PRODUCT_SUCCESS:
      let newSubState = state.data.map(data => {
        if(data.id !== action.id){
          return data;
        }
        return {
          ...data,
          verified: 1
        };
      });
      return Object.assign({}, state, { data:  newSubState  })
    default:
      return state;
  }
};