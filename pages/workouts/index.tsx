import { useRouter } from 'next/router';
import { parse } from 'cookie';

import PlusIcon from '../../assets/icons/plus.svg';
import AppNavigation from '../../components/Navigation/AppNavigation';
import WorkoutList from '../../components/WorkoutList';
import Button from '../../components/Button';
import AuthGuard from '../../components/Guard';
import { wrapper } from '../../redux';
import {
  getExerciseTemplates,
  getWorkoutTemplates,
} from '../../redux/actions/template';
import styles from './Workout.module.scss';
import { useSelector } from 'react-redux';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    ({ req, res }) => {
      console.log(
        '2. Page.getServerSideProps uses the store to dispatch things'
      );
      const { cookies } = req;
      // console.log(cookies, 'poop');
      // console.log(cookies?.token, 'tokenthings');
      console.log(req.cookies);
      store.dispatch(
        getWorkoutTemplates(
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJuZWlsQHRlc3QuY29tIiwiZXhwIjoxNjI2NTU3OTE1fQ.okdLNISPXujxMSqB_zoL3BrL_KWhL-1Pt-tJhRWc4zs'
        )
      );
    }
);

const Workouts = () => {
  const w = useSelector((store) => ({
    ...store.templateReducer,
  }));
  const router = useRouter();
  console.log('POGGERS', w);

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
        <WorkoutList workouts={w.workoutTemplates} />
      </AppNavigation>
    </AuthGuard>
  );
};

export default Workouts;
