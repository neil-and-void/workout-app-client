import Button from '../../../components/Button';
import ExerciseList from '../../../components/ExerciseList';
import AuthGuard from '../../../components/Guard';

import EditIcon from '../../../assets/icons/edit-alt.svg';
import PlayIcon from '../../../assets/icons/play.svg';

import styles from './Workouts.module.scss';

const Workout = () => {
  return (
    <div className={styles.workout}>
      <Button className={styles.back}>back</Button>
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
      <ExerciseList />
    </div>
  );
};

export default Workout;
