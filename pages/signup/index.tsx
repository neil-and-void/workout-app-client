import { useRouter } from 'next/router';

import Button from '../../components/Button';
import SignUpForm from '../../components/Forms/SignUpForm';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const router = useRouter();
  return (
    <div className={styles.signupFormContainer}>
      <h1 className={styles.header}>Sign up</h1>
      <SignUpForm className={styles.signUpForm} />
      <Button onClick={() => router.push('/login')} className="link">
        Login
      </Button>
    </div>
  );
};

export default SignUp;
