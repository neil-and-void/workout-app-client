import * as constants from '../constants/createWorkout';
import TemplateService from '../../services/TemplateService';

const templateService = new TemplateService();

export const setWorkoutTemplateName = (name) => ({
  type: constants.SET_WORKOUT_TEMPLATE_NAME,
  payload: name,
});

export const addExerciseTemplate = (exerciseTemplate) => ({
  type: constants.ADD_EXERCISE_TEMPLATE,
  payload: exerciseTemplate,
});

export const createWorkoutTemplate = (workoutTemplate) => {
  return async (dispatch) => {
    dispatch({
      type: constants.CREATE_WORKOUT_TEMPLATE,
    });
    templateService.createWorkoutTemplate(workoutTemplate);
    dispatch({
      type: constants.CREATE_WORKOUT_TEMPLATE_SUCCESS,
    });
    try {
    } catch (err) {
      console.error(err);
      dispatch({
        type: constants.CREATE_WORKOUT_TEMPLATE_ERROR,
      });
    }
  };
};
