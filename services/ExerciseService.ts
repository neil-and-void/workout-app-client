import axios from 'axios';

export default class ExerciseService {
  async getExercises(workoutId) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DEV_NEXT_SERVER}/exercises?workoutId=${workoutId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
}
