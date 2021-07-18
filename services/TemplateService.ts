import axios from 'axios';

class TemplateService {
  async createWorkoutTemplate() {
    return await axios.post('http://127.0.0.1:8000/api/templates/workouts', {
      withCredentials: true,
    });
  }

  async getWorkoutTemplates() {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/templates/workouts`,
      { withCredentials: true }
    );
    return response.data;
  }

  async getExerciseTemplates(workoutTemplateId) {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/templates/exercises?workoutTemplateId=${workoutTemplateId}`,
      { withCredentials: true }
    );
    return response.data;
  }
}

export default TemplateService;
