import WorkoutItem from './WorkoutItem';

import styles from './WorkoutList.module.scss';

interface WorkoutListProps {
  className?: string;
  workouts: Array<WorkoutTemplate>;
  onClickItem?: (number) => void;
  activeWorkout: number;
}

const WorkoutList = ({
  className,
  workouts,
  onClickItem,
  activeWorkout,
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
          active={activeWorkout === workout.id}
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
