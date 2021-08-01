import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';

import * as constants from '../constants/workout';

const initialState = {
  loading: false,
  activeWorkout: {
    started: null,
    ended: null,
    exercises: [],
  },
  error: null,
};

const workoutReducer = produce((draft, action) => {
  switch (action.type) {
    case constants.START_WORKOUT:
      break;
    case constants.START_WORKOUT_SUCCESS:
      break;
    case constants.START_WORKOUT_ERROR:
      break;
  }
}, initialState);

export default workoutReducer;
