import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  product: productReducer
});

export default rootReducer;