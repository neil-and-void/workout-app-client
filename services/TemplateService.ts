import axios from 'axios';
import { serialize } from 'cookie';

class TemplateService {
  async createWorkoutTemplate() {
    return await axios.post('http://127.0.0.1:8000/api/templates/workouts', {
      withCredentials: true,
    });
  }

  async getWorkoutTemplates(accessToken) {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/templates/workouts`,
      {
        withCredentials: true,
        headers: {
          cookie: serialize('token', accessToken, {
            sameSite: true,
            httpOnly: true,
          }),
        },
      }
    );
    return response.data;
  }

  async getExerciseTemplates(workoutTemplateId, accessToken) {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/templates/exercises?workoutTemplateId=${workoutTemplateId}`,
      {
        withCredentials: true,
        headers: {
          cookie: serialize('token', accessToken, {
            sameSite: true,
            httpOnly: true,
          }),
        },
      }
    );
    return response.data;
  }
}

export default TemplateService;
