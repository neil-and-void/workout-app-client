import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

import {
  addExerciseTemplate,
  createWorkoutTemplate,
} from '../../../redux/actions/createWorkout';
// @ts-ignore
import PlusIcon from '../../../assets/icons/plus.svg';
import Button from '../../Button';
import styles from './CreateExercisesForm.module.scss';

const CreateExercisesForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const workoutTemplate = useSelector(
    ({ createWorkoutReducer }) => createWorkoutReducer.workoutTemplate
  );

  const createNewWorkoutTemplate = (values) => {
    dispatch(createWorkoutTemplate(workoutTemplate));
    router.push('/workouts');
  };

  return (
    <div className={styles.exerciseForm}>
      <h1 className={`header`}>New Exercise</h1>
      <Formik
        initialValues={{
          name: '',
          sets: '',
        }}
        onSubmit={(values, actions) => {
          dispatch(addExerciseTemplate(values));
          actions.resetForm({});
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                name="name"
                type="text"
                className={`${styles.exerciseInput} ${styles.name}`}
                placeholder="name"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
              <input
                name="sets"
                type="number"
                className={`${styles.exerciseInput} ${styles.sets}`}
                placeholder="sets"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.sets}
              />
              <Button className={styles.textButton}>
                <PlusIcon className={styles.plusIcon} />
                Add
              </Button>
            </div>
          </form>
        )}
      </Formik>
      <div className={styles.exerciseList}>
        {workoutTemplate.exerciseTemplates.map((exercise, idx) => (
          <div className={styles.exercise} key={idx}>
            <div>{exercise.sets}</div>
            <span>&#160;x&#160;</span>
            <div>{exercise.name}</div>
          </div>
        ))}
      </div>
      <div className={`${styles.createButtonContainer}`}>
        <Button
          onClick={createNewWorkoutTemplate}
          className={styles.createButton}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateExercisesForm;
