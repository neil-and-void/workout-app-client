import AuthGuard from '../../../components/Guard';

const Workout = () => {
  return <div>workout</div>;
};

export default Workout;
const ActiveWorkout = () => {
  return (
    <AuthGuard>
      <div></div>
    </AuthGuard>
  );
};

export default ActiveWorkout;
