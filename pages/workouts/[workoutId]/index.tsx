import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { getExerciseTemplates } from '../../../redux/actions/template';
import { wrapper } from '../../../redux';
import Button from '../../../components/Button';
import ExerciseList from '../../../components/ExerciseList';
import AuthGuard from '../../../components/Guard';
import EditIcon from '../../../assets/icons/edit-alt.svg';
import PlayIcon from '../../../assets/icons/play.svg';

import styles from './Workouts.module.scss';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things'
      );
      const token = req.cookies.token;
      await store.dispatch(getExerciseTemplates(query.workoutId, token));
    }
);

const Workout = () => {
  const exerciseTemplateData = useSelector(({ templateReducer }) => ({
    exercises: templateReducer.exerciseTemplates,
    loading: templateReducer.loading,
    error: templateReducer.error,
  }));
  const router = useRouter();
  const dispatch = useDispatch();

  const startWorkout = () => {};
  const editWorkout = () => {};

  return (
    <div className={`${styles.workout} container`}>
      <Button className={styles.back} onClick={() => router.push('/workouts')}>
        back
      </Button>
      <div className={`header ${styles.workoutName}`}>Leg day</div>
      <div className={styles.workoutActions}>
        <Button
          className={styles.iconButton}
          onClick={() => console.log('sfjdkls')}
        >
          <PlayIcon className="icon" />
          <div className={styles.label}>Start</div>
        </Button>
        <Button className={styles.iconButton}>
          <EditIcon className="icon" />
          <div className={styles.label}>Edit</div>
        </Button>
      </div>
      <ExerciseList exercises={exerciseTemplateData.exercises} />
    </div>
  );
};

export default Workout;
