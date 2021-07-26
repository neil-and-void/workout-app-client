import styles from './ExerciseItem.module.scss';

interface ExerciseItemProps {
  exercise: string;
  onClick?: (id: number) => void;
}

const ExerciseItem = ({ exercise }: ExerciseItemProps) => {
  return <div className={`card ${styles.exerciseItem}`}>{exercise}</div>;
};

export default ExerciseItem;
