import { ReactNode } from 'react';

import styles from './WorkoutItem.module.scss';

interface WorkoutItemProps {
  children: ReactNode;
  className: string;
}

const WorkoutItem = ({ children, className }: WorkoutItemProps) => {
  return <div className={`${styles.workoutItem} ${className}`}>{children}</div>;
};

export default WorkoutItem;
