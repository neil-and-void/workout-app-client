import WorkoutItem from './WorkoutItem';

import styles from './WorkoutList.module.scss';

interface WorkoutListProps {
  className?: string;
  workouts: Array<WorkoutTemplate>;
  onClickItem?: (number) => void;
}

const WorkoutList = ({
  className,
  workouts,
  onClickItem,
}: WorkoutListProps) => {
  if (workouts.length === 0) {
    return (
      <div className={className}>
        <div className={styles.noWorkoutTemplates}>
          You don't have any workout templates!
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {workouts.map((workout, idx) => (
        <WorkoutItem
          key={idx}
          className={styles.workoutItem}
          onClick={(e) => onClickItem(workout.id)}
        >
          {workout.name}
        </WorkoutItem>
      ))}
    </div>
  );
};

export default WorkoutList;
