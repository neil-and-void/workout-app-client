import { Formik } from 'formik';

import Button from '../../../components/Button';
import styles from './CreateWorkoutForm.module.scss';

interface CreateWorkoutFormProps {
  onNext: Function;
  onCancel: Function;
}

const CreateWorkoutForm = ({ onNext, onCancel }: CreateWorkoutFormProps) => {
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
          <Button className={`${styles.textButton} ${styles.cancelButton}`}>
            Cancel
          </Button>
          <Button className={`${styles.textButton} ${styles.nextButton}`}>
            Next
          </Button>
          <div className={styles.workoutNameContainer}>
            <input className={styles.workoutName} name="name" />
          </div>
        </>
      )}
    </Formik>
  );
};

export default CreateWorkoutForm;
