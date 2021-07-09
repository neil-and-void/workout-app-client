import CreateExercisesForm from '../../../components/Forms/CreateExercisesForm';
import AuthGuard from '../../../components/Guard';
import styles from './Exercise.module.scss';

const CreateExercise = () => {
  return (
    <AuthGuard>
      <div className={`container ${styles.createExercise}`}>
        <CreateExercisesForm />
      </div>
    </AuthGuard>
  );
};

export default CreateExercise;
