import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import productReducer from './productReducer';
import adminAdsReducer from './adminAdsReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  auth: authReducer,
  ads: adminAdsReducer,
  form: formReducer,
  router: routerReducer,
  product: productReducer
});

export default rootReducer;