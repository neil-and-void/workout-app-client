import { useRouter } from 'next/router';

import CreateWorkoutForm from '../../../components/Forms/CreateWorkoutForm';
import AuthGuard from '../../../components/Guard';

const CreateWorkout = () => {
  const router = useRouter();

  return (
    <AuthGuard>
      <div className="container">
        <CreateWorkoutForm
          onCancel={() => router.push('/workouts')}
          onNext={() => router.push('/create/exercises')}
        />
      </div>
    </AuthGuard>
  );
};

export default CreateWorkout;
