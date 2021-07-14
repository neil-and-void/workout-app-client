import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import AuthService from '../../../services/AuthService';
import Button from '../../Button';
import styles from './LoginForm.module.scss';

interface SignUpFormProps {
  className: string;
}

const LoginForm = ({ className }: SignUpFormProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState(null);

  const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Password must have 8 characters, 1 letter, and 1 number'
      )
      .required('Required'),
  });

  const login = async (values) => {
    try {
      const authService = new AuthService();
      const response = await authService.login(values);
      localStorage.setItem(
        'token',
        response.data.token_type + ' ' + response.data.access_token
      );
      router.push('/workouts');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className={className}>
      <div className="error">{error}</div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        validate={() => ({})}
        onSubmit={(values, actions) => {
          login(values);
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
