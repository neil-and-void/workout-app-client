import axios from 'axios';
import { serialize } from 'cookie';
import Cookies from 'js-cookie';

class TemplateService {
  async createWorkoutTemplate(workoutTemplate, accessToken) {
    console.log(accessToken, 'nsdfji89o234');
    Cookies.set('token', accessToken, { domain: null });
    return await axios.post(
      'http://localhost:3000/api/templates/workouts',
      workoutTemplate,
      {
        withCredentials: true,
        // headers: {
        //   Cookie: serialize('token', accessToken, {
        //     sameSite: true,
        //     httpOnly: true,
        //   }),
        // },
      }
    );
  }

  async getWorkoutTemplates(accessToken) {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/templates/workouts`,
      {
        withCredentials: true,
        headers: {
          cookie: serialize('token', accessToken),
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
