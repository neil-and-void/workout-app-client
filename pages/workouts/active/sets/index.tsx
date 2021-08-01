import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../../components/Button';
import SetForm from '../../../../components/Forms/SetForm';
import SetList from '../../../../components/SetList';
import styles from './Sets.module.scss';

const Sets = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddExerciseSet = (exerciseSet) => {
    console.log(exerciseSet);
  };

  return (
    <div className={`container ${styles.workout}`}>
      <Button
        className={styles.back}
        onClick={() => router.push('/workouts/active')}
      >
        back
      </Button>
      <div className={`header ${styles.workoutName}`}>Leg day</div>
      <SetForm onAdd={handleAddExerciseSet} />
      <SetList sets={[]} />
    </div>
  );
};

export default Sets;
