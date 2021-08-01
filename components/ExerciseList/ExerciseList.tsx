import { ReactNode } from 'react';
import ExerciseItem from './ExerciseItem';

interface ExerciseListProps {
  exercises: Array<ExerciseTemplate>;
  onClickItem?: (exercise: ExerciseTemplate) => void;
}

const ExerciseList = ({ onClickItem, exercises }: ExerciseListProps) => {
  return (
    <>
      {exercises.map((exercise, idx) => (
        <ExerciseItem onClick={(exercise) => onClickItem(exercise)} key={idx} exercise={exercise} />
      ))}
    </>
  );
};

export default ExerciseList;
