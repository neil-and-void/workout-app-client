import axios from 'axios';

class TemplateService {
  async createWorkoutTemplate(workoutTemplate) {
    const headers = {
      Authorization: await localStorage.getItem('token'),
    };
    return await axios.post(
      'http://127.0.0.1:8000/api/templates/workouts',
      workoutTemplate,
      { headers: headers }
    );
  }
}

export default TemplateService;
