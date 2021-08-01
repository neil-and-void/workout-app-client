import moment from 'moment';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { wrapper } from '../../../redux';
import Button from '../../../components/Button';
import ExerciseList from '../../../components/ExerciseList';
import Timer from '../../../components/Timer';
import styles from './Active.module.scss';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const token = req.cookies.token;
      console.log(req.cookies);
      // await store.dispatch(getWorkoutTemplates(token));
    }
);

const Active = () => {
  const router = useRouter();

  const exerciseTemplateData = useSelector(({ templateReducer }) => ({
    exercises: templateReducer.exerciseTemplates,
    loading: templateReducer.loading,
    error: templateReducer.error,
  }));

  return (
    <div className={`container ${styles.workout}`}>
      <Button className={styles.back} onClick={() => router.push('/workouts')}>
        back
      </Button>
      <div className={`header ${styles.workoutName}`}>Leg day</div>
      <div className={styles.workoutControls}>
        <div>
          <Timer startTime={moment()} className={styles.timer} />
        </div>
        <div>
          <Button onClick={() => console.log('hi')}>Finish</Button>
        </div>
      </div>
      <ExerciseList
        onClickItem={(exercise) =>
          router.push(`/workouts/active/sets?exerciseId=${exercise.id}`)
        }
        exercises={exerciseTemplateData.exercises}
      />
    </div>
  );
};

export default Active;
