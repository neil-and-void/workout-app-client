import { useRouter } from 'next/router';

import PlusIcon from '../../assets/icons/plus.svg';
import AppNavigation from '../../components/Navigation/AppNavigation';
import WorkoutList from '../../components/WorkoutList';
import Button from '../../components/Button';

import styles from './Workout.module.scss';
import AuthGuard from '../../components/Guard';

const Workouts = () => {
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
        </div>
        <WorkoutList />
      </AppNavigation>
    </AuthGuard>
  );
};

export default Workouts;
