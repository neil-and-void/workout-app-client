import produce from 'immer';

import * as constants from '../constants/createWorkout';

const initialState = {
  loading: false,
  workoutTemplate: {
    name: '',
    exerciseTemplates: [],
  },
  error: null,
};

const createWorkoutReducer = produce((draft, action) => {
  switch (action.type) {
    case constants.SET_WORKOUT_TEMPLATE_NAME:
      draft.workoutTemplate.name = action.payload;
      break;
    case constants.ADD_EXERCISE_TEMPLATE:
      draft.workoutTemplate.exerciseTemplates.push(action.payload);
      break;
    case constants.CREATE_WORKOUT_TEMPLATE:
      draft.loading = true;
      break;
    case constants.CREATE_WORKOUT_TEMPLATE_SUCCESS:
      draft.loading = false;
      break;
    case constants.CREATE_WORKOUT_TEMPLATE_ERROR:
      draft.loading = false;
      draft.error = action.payload;
      break;
  }
}, initialState);

export default createWorkoutReducer;
