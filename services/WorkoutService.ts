import axios from 'axios';

export default class WorkoutService {
  async startWorkout(newWorkout, accessToken) {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_DEV_NEXT_SERVER}/workouts`,
      newWorkout,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }

  async endWorkout(workoutId, accessToken) {}

  async updateWorkout() {}
}
