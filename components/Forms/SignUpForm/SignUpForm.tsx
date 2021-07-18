import { Formik } from 'formik';
import * as Yup from 'yup';

import AuthService from '../../../services/AuthService';
import Button from '../../Button';
import styles from './SignUpForm.module.scss';

interface SignUpFormProps {
  className: string;
}

const SignUpForm = ({ className }: SignUpFormProps) => {
  const SignUpSchema = Yup.object({
    firstname: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Password must have 8 characters, 1 letter, and 1 number'
      )
      .required('Required'),
    confirmPassword: Yup.string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      })
      .required('Required'),
  });

  return (
    <div className={className}>
      <Formik
        initialValues={{
          email: '',
          firstname: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        validate={() => ({})}
        onSubmit={(values, actions) => {
          const authService = new AuthService();
          authService.signUp(values);
        }}
      >
        {(props) => (
          <>
            <div className="mt-3">
              <label className="label">E-mail</label>
              <input
                className="formField"
                name="email"
                placeholder="johnnyapple@example.com"
                type="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {props.touched.email && props.errors.email ? (
                <div className={styles.error}>{props.errors.email}</div>
              ) : null}
            </div>
            <div className="mt-3">
              <label className="label">First Name</label>
              <input
                className="formField"
                name="firstname"
                placeholder="Enter your first name"
                value={props.values.firstname}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {props.touched.firstname && props.errors.firstname ? (
                <div className={styles.error}>{props.errors.firstname}</div>
              ) : null}
            </div>

            <div className="mt-3">
              <label className="label">Password</label>
              <input
                className="formField"
                name="password"
                placeholder="pick a strong password"
                type="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {props.touched.password && props.errors.password ? (
                <div className={styles.error}>{props.errors.password}</div>
              ) : null}
            </div>

            <div className="mt-3">
              <label className="label">Confirm Password</label>
              <input
                className="formField"
                name="confirmPassword"
                placeholder="confirm password"
                type="password"
                value={props.values.confirmPassword}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              {props.touched.confirmPassword && props.errors.confirmPassword ? (
                <div className={styles.error}>
                  {props.errors.confirmPassword}
                </div>
              ) : null}
            </div>
            <Button
              type="submit"
              className="signUpButton"
              onClick={() => props.handleSubmit()}
            >
              Create Account
            </Button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
