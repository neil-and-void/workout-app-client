import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';

import * as constants from '../constants/template';

const initialState = {
  loading: false,
  workoutTemplateForm: {
    name: '',
    exerciseTemplates: [],
  },
  workoutTemplates: [],
  exerciseTemplates: [],
  error: null,
};

const templateReducer = produce((draft, action) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      const nextState = { ...action.payload.templateReducer };
      // if (draft.workoutTemplates.length > 0)
      //   nextState.workoutTemplates = draft.workoutTemplates;
      return nextState;
    case constants.SET_WORKOUT_TEMPLATE_NAME:
      draft.workoutTemplateForm.name = action.payload;
      break;
    case constants.ADD_EXERCISE_TEMPLATE:
      draft.workoutTemplateForm.exerciseTemplates.push(action.payload);
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
    case constants.GET_WORKOUT_TEMPLATES:
      draft.loading = true;
      break;
    case constants.GET_WORKOUT_TEMPLATES_SUCCESS:
      draft.loading = false;
      draft.workoutTemplates = action.workoutTemplates;
      break;
    case constants.GET_WORKOUT_TEMPLATES_ERROR:
      draft.loading = false;
      draft.error = action.payload;
      break;
    case constants.GET_EXERCISE_TEMPLATES:
      draft.loading = true;
      break;
    case constants.GET_EXERCISE_TEMPLATES_SUCCESS:
      draft.loading = false;
      draft.exerciseTemplates = action.exerciseTemplates;
      break;
    case constants.GET_EXERCISE_TEMPLATES_ERROR:
      draft.loading = false;
      draft.error = action.payload;
      break;
  }
}, initialState);

export default templateReducer;
