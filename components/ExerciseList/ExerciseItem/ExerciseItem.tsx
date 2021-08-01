import styles from './ExerciseItem.module.scss';

interface ExerciseItemProps {
  exercise: ExerciseTemplate;
  onClick?: (exercise: ExerciseTemplate) => void;
}

const ExerciseItem = ({ exercise, onClick }: ExerciseItemProps) => {
  return <div className={`card ${styles.exerciseItem}`} onClick={() => onClick(exercise)}>{exercise.name}</div>;
};

export default ExerciseItem;
