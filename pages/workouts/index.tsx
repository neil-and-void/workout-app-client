import { useRouter } from 'next/router';

import AppNavigation from '../../components/Navigation/AppNavigation';
import WorkoutList from '../../components/WorkoutList';
import Button from '../../components/Button';

import styles from './Workout.module.scss';

const Workouts = () => {
  const router = useRouter();

  return (
    <AppNavigation>
      <div className={styles.addWorkoutButtonContainer}>
        <div className={styles.heading}>
          <h1 className="header">Workouts</h1>
          <Button
            className={styles.addWorkoutButton}
            onClick={() => router.push('/create/workout')}
          >
            new workout
          </Button>
        </div>
      </div>
      <WorkoutList />
    </AppNavigation>
  );
};

export default Workouts;
