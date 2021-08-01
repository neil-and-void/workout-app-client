interface Workout {
  name: string;
}

interface ExerciseTemplate {
  id: number;
  name: string;
  sets: number;
}

interface WorkoutTemplate {
  id: number;
  name: string;
  exerciseTemplates: Array<ExerciseTemplate>;
}

interface ExerciseSet {
  weight: number;
  reps: number;
}
