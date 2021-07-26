import { ReactNode } from 'react';
import ExerciseItem from './ExerciseItem';

interface ExerciseListProps {
  exercises: Array<ExerciseTemplate>;
  onClickItem?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ExerciseList = ({ onClickItem, exercises }: ExerciseListProps) => {
  return (
    <>
      {exercises.map((exercise, idx) => (
        <ExerciseItem key={idx} exercise={exercise.name} />
      ))}
    </>
  );
};

export default ExerciseList;
