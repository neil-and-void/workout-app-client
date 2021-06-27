import { Formik } from 'formik';
import * as Yup from 'yup';

import UserService from '../../../services/UserService';
import Button from '../../Button';
import styles from './LoginForm.module.scss';

interface SignUpFormProps {
  className: string
}

const LoginForm = ({className}: SignUpFormProps) => {

  const LoginSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must have 8 characters, 1 letter, and 1 number')
      .required('Required'),
  })

  return (
    <div className={className}>
      <Formik
          initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        validate={() => ({})}
        onSubmit={(values, actions) => {
          const userService = new UserService();
          userService.login(values);
        }}
      >
         {props => (
            <>
              <div className='mt-3'>
              <label className='label'>E-mail</label>
                <input 
                  name="email"
                  className="formField"
                  placeholder="E-mail"
                />
              </div>
              <div className='mt-3'>
              <label className='label'>Password</label>
                <input
                  className="formField"
                  name='email'
                  placeholder="Password"
                />
              </div>
              <Button type='submit' className="signUpButton" onClick={() => props.handleSubmit()}>Create Account</Button>
            </>
         )}
      </Formik>
    </div>
  )
}

export default LoginForm
