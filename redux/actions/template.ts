import * as constants from '../constants/template';
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
    await templateService.createWorkoutTemplate(workoutTemplate);
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

export const getWorkoutTemplates = (accessToken) => {
  return async (dispatch) => {
    dispatch({
      type: constants.GET_WORKOUT_TEMPLATES,
    });
    const workoutTemplates = await templateService.getWorkoutTemplates(
      accessToken
    );
    dispatch({
      type: constants.GET_WORKOUT_TEMPLATES_SUCCESS,
      workoutTemplates,
    });
    try {
    } catch (err) {
      console.error(err);
      dispatch({
        type: constants.GET_WORKOUT_TEMPLATES_ERROR,
      });
    }
  };
};

export const getExerciseTemplates = (accessToken, workoutTemplateId) => {
  return async (dispatch) => {
    dispatch({
      type: constants.GET_EXERCISE_TEMPLATES,
    });
    const exerciseTemplates = await templateService.getExerciseTemplates(
      accessToken,
      workoutTemplateId
    );
    dispatch({
      type: constants.GET_EXERCISE_TEMPLATES_SUCCESS,
      exerciseTemplates,
    });
    try {
    } catch (err) {
      console.error(err);
      dispatch({
        type: constants.GET_EXERCISE_TEMPLATES_ERROR,
      });
    }
  };
};
