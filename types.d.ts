interface Workout {
  name: string;
}

interface ExerciseTemplate {
  name: string;
  sets: number;
}

interface WorkoutTemplate {
  name: string;
  exerciseTemplates: Array<ExerciseTemplate>;
}
