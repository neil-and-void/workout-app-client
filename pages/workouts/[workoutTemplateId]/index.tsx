import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { useAuth } from '../../../hooks/useAuth';
import { getExerciseTemplates } from '../../../redux/actions/template';
import { wrapper } from '../../../redux';
import Button from '../../../components/Button';
import ExerciseList from '../../../components/ExerciseList';
import AuthGuard from '../../../components/Guard';
import EditIcon from '../../../assets/icons/edit-alt.svg';
import PlayIcon from '../../../assets/icons/play.svg';
import { startWorkout } from '../../../redux/actions/workout';
import styles from './Workouts.module.scss';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things'
      );
      const token = req.cookies.token;
      await store.dispatch(
        getExerciseTemplates(query.workoutTemplateId, token)
      );
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
  const { getTokenSilently } = useAuth();
  const { workoutTemplateId } = router.query;

  const handleStartWorkout = async () => {
    const token = await getTokenSilently();
    const newWorkout = {
      workoutTemplateId: workoutTemplateId,
      started: moment().toISOString(),
    };
    dispatch(startWorkout(newWorkout, token));
    router.push('/workouts/active');
  };
  const handleEditWorkout = () => {};

  return (
    <div className={`${styles.workout} container`}>
      <Button className={styles.back} onClick={() => router.push('/workouts')}>
        back
      </Button>
      <div className={`header ${styles.workoutName}`}>Leg day</div>
      <div className={styles.workoutActions}>
        <Button className={styles.iconButton} onClick={handleStartWorkout}>
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
