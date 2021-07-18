import ExerciseItem from './ExerciseItem';

const ExerciseList = () => {
  const exercises = [
    'squat',
    'squat',
    'squat',
    'squat',
    'squat',
    'squat',
    'squat',
  ];

  return (
    <div>
      {exercises.map((exercise) => (
        <ExerciseItem exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;
