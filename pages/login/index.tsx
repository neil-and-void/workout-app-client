import LoginForm from '../../components/Forms/LoginForm';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.loginFormContainer}>
      <h1 className={styles.header}>
        Login
      </h1>
      <LoginForm className={styles.loginForm}/>
    </div>
  )
}

export default Login;
