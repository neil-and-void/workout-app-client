import { ReactNode } from 'react';

import Button from '../../../components/Button';
import styles from './WorkoutItem.module.scss';

interface WorkoutItemProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  active: boolean;
}

const WorkoutItem = ({
  children,
  className,
  active,
  onClick,
}: WorkoutItemProps) => {
  return (
    <div className={`${styles.workoutItem} ${className}`}>
      <div className={styles.workoutInfo}>
        <div className={styles.name}>{children}</div>
        <div className={styles.info}>
          6 exercises <span> · </span> 24 sets
        </div>
      </div>
      <Button className={styles.startButton} onClick={onClick}>
        View
      </Button>
    </div>
  );
};

export default WorkoutItem;
