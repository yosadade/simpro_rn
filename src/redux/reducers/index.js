import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {projectReducer} from './project';
import {dailyScrumReducer} from './dailyScrum';
import {financeReducer} from './finance';
import {employeeReducer} from './employee';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  projectReducer,
  dailyScrumReducer,
  financeReducer,
  employeeReducer,
});

export default reducer;
