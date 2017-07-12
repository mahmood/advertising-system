import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import productReducer from './productReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  router: routerReducer,
  product: productReducer
});

export default rootReducer;