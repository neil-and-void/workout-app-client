import { useState } from 'react';
import { useRouter } from 'next/router';
import { Formik } from 'formik';

// @ts-ignore
import PlusIcon from '../../../assets/icons/plus.svg';
import Button from '../../Button';
import styles from './CreateExercisesForm.module.scss';

const CreateExercisesForm = () => {
  const router = useRouter();
  const [exercises, setExercises] = useState([
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
    { name: 'e1', sets: 4 },
  ]);

  const createWorkout = () => {
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
        onSubmit={(values, actions) => {}}
      >
        {(props) => (
          <div className={styles.inputContainer}>
            <input
              name="name"
              type="text"
              className={`${styles.exerciseInput} ${styles.name}`}
              placeholder="name"
            />
            <input
              name="sets"
              type="number"
              className={`${styles.exerciseInput} ${styles.sets}`}
              placeholder="sets"
            />
            <Button className={styles.textButton}>
              <PlusIcon className={styles.plusIcon} />
              Add
            </Button>
          </div>
        )}
      </Formik>
      <div className={styles.exerciseList}>
        {exercises.map((exercise, idx) => (
          <div className={styles.exercise} key={idx}>
            <div>{exercise.sets}</div>
            <span> x </span>
            <div>{exercise.name}</div>
          </div>
        ))}
      </div>
      <div className={`${styles.createButtonContainer}`}>
        <Button onClick={createWorkout} className={styles.createButton}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateExercisesForm;
