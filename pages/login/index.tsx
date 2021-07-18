import { useRouter } from 'next/router';

import Button from '../../components/Button';
import LoginForm from '../../components/Forms/LoginForm';

import styles from './Login.module.scss';

const Login = () => {
  const router = useRouter();
  return (
    <div className={styles.loginFormContainer}>
      <h1 className={styles.header}>Login</h1>
      <LoginForm className={styles.loginForm} />
      <Button onClick={() => router.push('/signup')} className="link">
        Sign up
      </Button>
    </div>
  );
};

export default Login;
