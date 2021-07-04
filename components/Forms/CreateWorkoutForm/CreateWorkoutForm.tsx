import { Formik } from 'formik';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';
import styles from './CreateWorkoutForm.module.scss';

interface CreateWorkoutFormProps {
  onNext: Function;
  onCancel: Function;
}

const CreateWorkoutForm = ({ onNext, onCancel }: CreateWorkoutFormProps) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        name: 'name',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      {(props) => (
        <>
          <Button
            onClick={() => router.push('/workouts')}
            className={`${styles.textButton} ${styles.cancelButton}`}
          >
            Cancel
          </Button>
          <Button
            onClick={() => router.push('/create/exercises')}
            className={`${styles.textButton} ${styles.nextButton}`}
          >
            Next
          </Button>
          <div className={styles.workoutNameContainer}>
            <input
              className={styles.workoutName}
              name="name"
              placeholder="Workout name"
            />
          </div>
        </>
      )}
    </Formik>
  );
};

export default CreateWorkoutForm;
