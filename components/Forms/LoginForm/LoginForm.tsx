import { Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import UserService from '../../../services/UserService';
import Button from '../../Button';
import styles from './LoginForm.module.scss';

interface SignUpFormProps {
  className: string;
}

const LoginForm = ({ className }: SignUpFormProps) => {
  const router = useRouter();
  const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Password must have 8 characters, 1 letter, and 1 number'
      )
      .required('Required'),
  });

  return (
    <div className={className}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        validate={() => ({})}
        onSubmit={async (values, actions) => {
          try {
            const userService = new UserService();
            await userService.login(values);
            router.push('/workouts');
          } catch (e) {
            console.error(e);
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="mt-3">
              <label className="label">E-mail</label>
              <input
                name="email"
                className="formField"
                type="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                placeholder="E-mail"
              />
              {props.errors.email && props.touched.email && (
                <div className="error">{props.errors.email}</div>
              )}
            </div>
            <div className="mt-3">
              <label className="label">Password</label>
              <input
                className="formField"
                name="password"
                type="password"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                placeholder="Password"
              />
              {props.errors.password && props.touched.password && (
                <div className="error">{props.errors.password}</div>
              )}
            </div>
            <Button type="submit" className="signUpButton">
              Login
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
