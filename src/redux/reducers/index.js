import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {projectReducer} from './project';
import {dailyScrumReducer} from './dailyScrum';
import {financeReducer} from './finance';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  projectReducer,
  dailyScrumReducer,
  financeReducer,
});

export default reducer;
