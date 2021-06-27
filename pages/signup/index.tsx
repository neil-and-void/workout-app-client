import SignUpForm from '../../components/Forms/SignUpForm';
import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <div className={styles.signupFormContainer}>
      <h1 className={styles.header}>
        Sign up
      </h1>
      <SignUpForm className={styles.signUpForm} />
    </div>
  )
}

export default SignUp
