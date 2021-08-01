import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  addExerciseTemplate,
  createWorkoutTemplate,
} from '../../../redux/actions/template';
// @ts-ignore
import PlusIcon from '../../../assets/icons/plus.svg';
import Button from '../../Button';
import styles from './CreateExercisesForm.module.scss';
import { useAuth } from '../../../hooks/useAuth';

const CreateExercisesForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { getTokenSilently } = useAuth();
  const workoutTemplate = useSelector(
    ({ templateReducer }) => templateReducer.workoutTemplateForm
  );

  const CreateExerciseFormSchema = Yup.object().shape({
    name: Yup.string().max(128).required('Required'),
    sets: Yup.number().required('Required'),
  });

  const createNewWorkoutTemplate = async () => {
    const token = await getTokenSilently();
    console.log(token);
    dispatch(createWorkoutTemplate(workoutTemplate, token));
    // router.push('/workouts');
  };

  return (
    <div className={styles.exerciseForm}>
      <h1 className={`header`}>New Exercise</h1>
      <Formik
        initialValues={{
          name: '',
          sets: '',
        }}
        validationSchema={CreateExerciseFormSchema}
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
              <Button className={styles.textButton} type="submit">
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
