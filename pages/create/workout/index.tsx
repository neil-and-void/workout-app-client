import { useRouter } from 'next/router';

import CreateWorkoutForm from '../../../components/Forms/CreateWorkoutForm';

const CreateWorkout = () => {
  const router = useRouter();

  return (
    <div className="container">
      <CreateWorkoutForm
        onCancel={() => router.push('/workouts')}
        onNext={() => router.push('/create/exercises')}
      />
    </div>
  );
};

export default CreateWorkout;
