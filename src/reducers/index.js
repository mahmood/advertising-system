import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import counter from './counter';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  counter,
  auth: authReducer,
  form: formReducer
});

export default rootReducer;