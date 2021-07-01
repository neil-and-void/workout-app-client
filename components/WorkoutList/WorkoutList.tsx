import WorkoutItem from './WorkoutItem';

import styles from './WorkoutList.module.scss';

interface WorkoutListProps {
  className?: string;
}

const WorkoutList = ({ className }: WorkoutListProps) => {
  const workouts = ['day 1', 'day 1', 'day 1', 'day 1', 'day 1'];

  return (
    <div className={className}>
      {workouts.map((workout) => (
        <WorkoutItem className={styles.workoutItem}>{workout}</WorkoutItem>
      ))}
    </div>
  );
};

export default WorkoutList;
