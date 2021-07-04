import CreateExercisesForm from '../../../components/Forms/CreateExercisesForm';
import styles from './Exercise.module.scss';

const CreateExercise = () => {
  return (
    <div className={`container ${styles.createExercise}`}>
      <CreateExercisesForm />
    </div>
  );
};

export default CreateExercise;
