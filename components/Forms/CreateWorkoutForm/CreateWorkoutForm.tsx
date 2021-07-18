import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { setWorkoutTemplateName } from '../../../redux/actions/template';
import Button from '../../../components/Button';
import styles from './CreateWorkoutForm.module.scss';

interface CreateWorkoutFormProps {
  onNext: Function;
  onCancel: Function;
}

const CreateWorkoutForm = ({ onNext, onCancel }: CreateWorkoutFormProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const CreateWorkoutSchema = Yup.object({
    name: Yup.string()
      .min(1, 'Name must have at least 1 character')
      .max(128, 'Max workout name is 128 characters')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        name: 'name',
      }}
      validationSchema={CreateWorkoutSchema}
      validate={() => ({})}
      onSubmit={(values, actions) => {
        dispatch(setWorkoutTemplateName(values.name));
        router.push('/create/exercises');
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Button
            onClick={() => router.push('/workouts')}
            className={`${styles.textButton} ${styles.cancelButton}`}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className={`${styles.textButton} ${styles.nextButton}`}
          >
            Next
          </Button>
          <div className={styles.workoutNameContainer}>
            <input
              className={styles.workoutName}
              name="name"
              placeholder="Workout name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
            />
            {props.errors.name && props.touched.name && (
              <div className="error">{props.errors.name}</div>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default CreateWorkoutForm;
