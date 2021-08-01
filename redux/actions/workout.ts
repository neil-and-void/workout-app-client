import * as constants from '../constants/workout';
import WorkoutService from '../../services/WorkoutService';
import ExerciseService from '../../services/ExerciseService';

const workoutService = new WorkoutService();
const exerciseService = new ExerciseService();

export const startWorkout = (newWorkout, accessToken) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: constants.START_WORKOUT,
      });
      const data = await workoutService.startWorkout(newWorkout, accessToken);
      console.log(data);
      dispatch({
        type: constants.START_WORKOUT_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: constants.START_WORKOUT_ERROR,
      });
    }
  };
};

export const getActiveWorkoutExercises = (workoutId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: constants.GET_ACTIVE_WORKOUT_EXERCISES,
      });
      const exercises = await exerciseService.getExercises(workoutId);
      dispatch({
        type: constants.GET_ACTIVE_WORKOUT_EXERCISES_SUCCESS,
        exercises,
      });
    } catch (error) {
      dispatch({
        type: constants.GET_ACTIVE_WORKOUT_EXERCISES_ERROR,
      });
    }
  };
};
