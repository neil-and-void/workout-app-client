import { useRouter } from 'next/router';

import PlusIcon from '../../assets/icons/plus.svg';
import AppNavigation from '../../components/Navigation/AppNavigation';
import WorkoutList from '../../components/WorkoutList';
import Button from '../../components/Button';
import AuthGuard from '../../components/Guard';
import { wrapper } from '../../redux';
import { getActiveWorkoutExercises } from '../../redux/actions/workout';
import styles from './Workout.module.scss';
import { useSelector } from 'react-redux';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const state = store.getState();
      console.log(state);
      const token = req.cookies.token;
      console.log(req.cookies);
      await store.dispatch(getActiveWorkoutExercises(token));
    }
);

const Workouts = () => {
  const workoutTemplates = useSelector((store) => {
    return store.templateReducer.workoutTemplates;
  });
  console.log(workoutTemplates);
  const router = useRouter();

  return (
    <AuthGuard>
      <AppNavigation>
        <div className={styles.addWorkoutButtonContainer}>
          <div className={styles.heading}>
            <h1 className="header">Workouts</h1>
            <Button
              className={styles.addWorkoutButton}
              onClick={() => router.push('/create/workout')}
            >
              <PlusIcon className={styles.addWorkoutIcon} /> New workout
            </Button>
          </div>
          <div className={styles.subheading}>
            <Button className={`${styles.templates} ${styles.active}`}>
              templates
            </Button>
            <Button className={`${styles.previous}`}>previous</Button>
          </div>
        </div>
        <WorkoutList
          workouts={workoutTemplates}
          onClickItem={(workoutId) => router.push(`/workouts/${workoutId}`)}
          activeWorkout={11}
        />
      </AppNavigation>
    </AuthGuard>
  );
};

export default Workouts;
