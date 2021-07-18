import { combineReducers } from 'redux';

import userReducer from './user';
import workoutReducer from './workout';
import templateReducer from './template';

export default combineReducers({
  userReducer,
  workoutReducer,
  templateReducer,
});
