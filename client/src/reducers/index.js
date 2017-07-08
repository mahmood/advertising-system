import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import counter from './counter';

const rootReducer = combineReducers({
  counter,
  form: formReducer
});

export default rootReducer;