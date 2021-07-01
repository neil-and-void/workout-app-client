import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Button from '../../../components/Button';

import styles from './WorkoutItem.module.scss';

interface WorkoutItemProps {
  children: ReactNode;
  className: string;
}

const WorkoutItem = ({ children, className }: WorkoutItemProps) => {
  const router = useRouter();

  return (
    <div className={`${styles.workoutItem} ${className}`}>
      <div className={styles.workoutInfo}>
        <div className={styles.name}>Leg day</div>
        <div className={styles.info}>
          6 exercises <span> · </span> 24 sets
        </div>
      </div>
      <Button
        className={styles.startButton}
        onClick={() => router.push('workouts/1234')}
      >
        Start
      </Button>
    </div>
  );
};

export default WorkoutItem;
