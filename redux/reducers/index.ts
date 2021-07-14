import { combineReducers } from 'redux';

import userReducer from './user';
import workoutReducer from './workout';
import createWorkoutReducer from './createWorkout';

export default combineReducers({
  userReducer,
  workoutReducer,
  createWorkoutReducer,
});
