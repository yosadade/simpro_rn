import {combineReducers} from 'redux';
import {registerReducer} from './auth';

const reducer = combineReducers({
  registerReducer,
});

export default reducer;
