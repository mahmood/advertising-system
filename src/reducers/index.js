import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import productReducer from './productReducer';
import adminAdsReducer from './adminAdsReducer';
import adminCatsReducer from './adminCatsReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  auth: authReducer,
  ads: adminAdsReducer,
  cat: adminCatsReducer,
  form: formReducer,
  router: routerReducer,
  product: productReducer
});

export default rootReducer;