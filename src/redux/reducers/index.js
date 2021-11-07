import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {projectReducer} from './project';
import {dailyScrumReducer} from './dailyScrum';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  projectReducer,
  dailyScrumReducer,
});

export default reducer;
